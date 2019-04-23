﻿using Metis.Teamwork.Entities;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Metis.Overseer.Services
{
    public class LogService
    {
        private readonly IMongoCollection<LogBook> _LogBooks;
        private readonly IMongoCollection<LogEntry> _LogEntries;

        public LogService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("Metis"));
            var database = client.GetDatabase("metis");
            _LogBooks = database.GetCollection<LogBook>("logBooks");
            _LogEntries = database.GetCollection<LogEntry>("logEntries");
        }

        public async Task<IEnumerable<LogBook>> GetBooks()
        {
            var result = await _LogBooks
                .Find(x => true)
                .Project<LogBook>(Builders<LogBook>.Projection
                    .Include("_id")
                    .Include("close")
                    .Include("members._id")
                    .Include("owner._id")
                    .Include("name"))
                .SortByDescending(x => x.Close)
                .ToListAsync();

            return result;
        }

        public async Task<LogBook> GetBook(string id)
        {
            var book = await _LogBooks
                .Find(x => x.Id == id)
                .SingleOrDefaultAsync();

            if(book == null)
            {
                throw new KeyNotFoundException($"The Log book {id} does not exist.");
            }

            var entries = await _LogEntries
                .Find(x => x.LogBookId == id)
                .SortBy(x=>x.Status)
                .ThenByDescending(x=>x.Priority)
                .ThenByDescending(x=>x.DTG)
                .ToListAsync();

            book.Entries = entries;

            return book;
        }

        public async Task<LogEntry> GetEntry(string id)
        {
            var entry = await _LogEntries
                .Find(x => x.Id == id)
                .SingleOrDefaultAsync();

            if (entry == null)
            {
                throw new KeyNotFoundException($"The Log entry {id} does not exist.");
            }

            return entry;
        }

        public async Task<LogBook> Create(LogBook book)
        {
            await _LogBooks.InsertOneAsync(book);
            return book;
        }

        public async Task<LogEntry> Create(LogEntry entry)
        {           
            if (string.IsNullOrEmpty(entry.LogBookId))
            {
                throw new NullReferenceException("The Log entry must belong to an existing book");
            }
            var bookExists = await _LogBooks.CountDocumentsAsync(x => x.Id == entry.LogBookId);
            if(bookExists < 1)
            {
                throw new NullReferenceException("The Log entry book does not exist");
            }

            await _LogEntries.InsertOneAsync(entry);
            return entry;
        }

        public async Task Update(string id, LogBook book)
        {
            await _LogBooks.ReplaceOneAsync(x => x.Id == id, book);
        }

        public async Task Update(string id, LogEntry entry)
        {
            await _LogEntries.ReplaceOneAsync(x => x.Id == id, entry);
        }

        public async Task RemoveBook(string id)
        {
            await _LogBooks.DeleteOneAsync(x => x.Id == id);
        }

        public async Task RemoveEntry(string id)
        {
            await _LogEntries.DeleteOneAsync(x => x.Id == id);
        }
    }
}