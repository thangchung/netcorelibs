using System;

namespace MagazineWebsite.Apis.Entities
{
    public class ArticlePhoto
    {
        public Guid Id { get; set; }
        public Guid ArticleId { get; set; }
        public Guid PhotoId { get; set; }
    }
}
