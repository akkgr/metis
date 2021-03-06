﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace Metis.Teamwork.Entities
{
    public class LogEntry
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        /// <summary>
        /// The id of the log book that this entry belongs to
        /// </summary>
        [Required]
        [BsonElement("logBookId")]
        public string LogBookId { get; set; }
        /// <summary>
        /// The Issuer of the entry
        /// </summary>
        [Required]
        [BsonElement("issuer")]
        public Member Issuer { get; set; }
        /// <summary>
        /// Date Time Given
        /// </summary>
        [Required]
        [BsonElement("dtg")]
        public DateTime DTG { get; set; }
        /// <summary>
        /// Estimated Completion Time
        /// </summary>
        [BsonElement("ect")]
        public DateTime ECT { get; set; }
        /// <summary>
        /// The action recipient
        /// </summary>
        [BsonElement("recipient")]
        public Member Recipient { get; set; }
        [BsonElement("completionTime")]
        public DateTime CompletionTime { get; set; }
        [BsonElement("status")]
        public Status Status { get; set; }
        [BsonElement("priority")]
        public Priority Priority { get; set; }
        /// <summary>
        /// Description of the issue
        /// </summary>
        [Required]
        [BsonElement("title")]
        public string Title { get; set; }
        /// <summary>
        /// Description of the issue
        /// </summary>
        [BsonElement("description")]
        public string Description { get; set; }
        /// <summary>
        /// Resolve actions that has been taken
        /// </summary>
        [BsonElement("actions")]
        public string Actions { get; set; }

        public LogEntry()
        {
            this.DTG = DateTime.Today.ToUniversalTime();
            this.ECT = DateTime.Today.AddHours(2).ToUniversalTime();
            this.Title = "Νέα Εγγραφή";
        }
    }
}
