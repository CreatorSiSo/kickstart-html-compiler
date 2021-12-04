export default function (html: string, templates: Map<string, string>): string {
  return html
    .replace("<Template1></Template1>", templates.get("Template1"))
    .replace("<Template2></Template2>", templates.get("Template2"))
    .replace("<Template3></Template3>", templates.get("Template3"));
}
