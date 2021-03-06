﻿using Metis.Core.Entities;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace Metis.Guard.Entities
{
    /// <summary>
    /// A collection of web pages that comprise a Site to be guarded
    /// </summary>
    public class Site
    {
        /// <summary>
        /// Unique Identifier
        /// </summary>
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        /// <summary>
        /// The charset encoding code for the pages of the site
        /// (like ISO-8859-7, ASCII etc.), default is UTF-8
        /// </summary>
        [BsonElement("encodingCode")]
        public string EncodingCode { get; set; } = "UTF-8";
        /// <summary>
        /// The overall status of the site pages
        /// </summary>
        [BsonElement("status")]
        [BsonRepresentation(BsonType.String)]
        public Status Status { get; set; }
        [BsonElement("pages")]
        public IEnumerable<Page> Pages { get; set; }
        [BsonElement("latitude")]
        public decimal Latitude { get; set; }
        [BsonElement("longitude")]
        public decimal Longitude { get; set; }
        [BsonElement("category")]
        public string Category { get; set; }

        [BsonIgnore]
        public List<EmailAddress> EmailAddresses { get; set; }

        public Site()
        {
            this.Pages = new List<Page>();
            this.EmailAddresses = new List<EmailAddress>();
        }
    }
}
