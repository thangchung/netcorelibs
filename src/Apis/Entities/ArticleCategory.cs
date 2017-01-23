using System;

namespace MagazineWebsite.Apis.Entities
{
    public class ArticleCategory
    {
        public Guid Id { get; set; }
        public Guid ArticleId { get; set; }
        public Guid CategoryId { get; set; }
    }
}
