import compiler from "../dist/index.esm.js";

const templates = new Map([
  ["Template1", "<section><strong>Template 1</strong></section>"],
  ["Template2", "<a href='https://temp.late.2'>Template 2</a>"],
  ["Template3", "<div>Template 3</div>"],
]);

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <Template1></Template1>
    <Template2></Template2>
    <Template3></Template3>
  </body>
</html>
`;

console.log(compiler(html, templates));
