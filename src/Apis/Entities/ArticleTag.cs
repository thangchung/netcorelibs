using System;

namespace MagazineWebsite.Apis.Entities
{
    public class ArticleTag
    {
        public Guid Id { get; set; }
        public Guid ArticleId { get; set; }
        public Guid TagId { get; set; }
    }
}
