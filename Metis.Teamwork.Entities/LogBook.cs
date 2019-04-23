﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Metis.Teamwork.Entities
{
    public class LogBook
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        /// <summary>
        /// The Owner of the book
        /// </summary>        
        [Required]
        [BsonElement("owner")]        
        public Member Owner { get; set; }
        /// <summary>
        /// Book last update Date Time
        /// </summary>
        [BsonElement("lastUpdate")]
        public DateTime LastUpdate { get; set; }
        /// <summary>
        /// Book is active until Date Time
        /// book should be locked after this date
        /// </summary>
        [BsonElement("close")]
        public DateTime Close { get; set; }
        /// <summary>
        /// The users that can view/edit the entries in the book
        /// </summary>
        [BsonElement("members")]
        public IEnumerable<Member> Members { get; set; }
        /// <summary>
        /// The name of the book
        /// </summary>
        [BsonElement("name")]
        public string Name { get; set; }

        /// <summary>
        /// The Entries that belong to the book
        /// (Non persisted property)
        /// </summary>
        [BsonIgnore]
        public IEnumerable<LogEntry> Entries { get; set; }

        public LogBook()
        {
            this.Members = new List<Member>();
            this.Entries = new List<LogEntry>();
            this.LastUpdate = DateTime.Today.ToUniversalTime();
            this.Close = DateTime.Today.AddDays(90).ToUniversalTime();
        }
    }
}