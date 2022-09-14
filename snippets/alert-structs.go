type Alert struct {
	Title               string                 `json:"title"`
	Source              string                 `json:"source"`
	SourceID            string                 `json:"source_id"`
	SourceUrl           string                 `json:"source_url"`
	Severity            string                 `json:"severity"`
	EventTime           string                 `json:"event_time"`
	Category            string                 `json:"category"`
	Description         string                 `json:"description"`
	State               map[string]interface{} `json:"state"`
	SourceMetadata      map[string]interface{} `json:"source_metadata"`
	DestinationMetadata map[string]interface{} `json:"destination_metadata"`
	Assets              []Asset                `json:"assets"`
	RelatedEvents       []Events               `json:"related_events"`
	Raw                 interface{}            `json:"raw"`
	Enrichment          []Enrichment           `json:"enrichment"`
}
