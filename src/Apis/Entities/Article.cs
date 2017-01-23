using System;

namespace MagazineWebsite.Apis.Entities
{
    public class Article
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string SubTitle { get; set; }
        public string TextBody { get; set; }
        public Guid SourceId { get; set; }
        public DateTime Date { get; set; }
        public string Remark { get; set; }
    }
}
