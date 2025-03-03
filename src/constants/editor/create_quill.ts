export const create_quill = ({
  id,
  toolbar,
  clipboard,
  keyboard,
  placeholder,
  theme,
  customFonts = [],
  customJS,
  readOnly,
}: {
  id: string;
  toolbar: 'false' | string;
  clipboard: string;
  keyboard: string;
  placeholder: string;
  theme: 'snow' | 'bubble';
  customFonts: Array<string>;
  customJS: string;
  readOnly: boolean;
}) => {
  let font = '';
  if (customFonts.length > 0) {
    const fontList = "'" + customFonts.join("','") + "'";
    font = `
    // Add fonts to whitelist
    var Font = Quill.import('formats/font');
    Font.whitelist = [${fontList}];
    Quill.register(Font, true);

    `;
  }

  let modules = `
  history: {
    delay: 2000,
    maxStack: 500,
    userOnly: true
  },
  toolbar: ${toolbar}, 
  `;

  if (clipboard) {
    modules += `clipboard: ${clipboard},`;
  }
  if (keyboard) {
    modules += `keyboard: ${keyboard},`;
  }

  return `
  <script>
  
  ${font}
  ${customJS}
  var quill = new Quill('#${id}', {
    modules: { ${modules} },
    placeholder: '${placeholder}',
    theme: '${theme}',
    readOnly: ${readOnly}
  });
  </script>
  `;
};
