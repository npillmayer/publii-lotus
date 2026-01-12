/*
 * Custom function used to generate the output of the theme variables; more about it can be found at https://getpublii.com/dev/theme-variables/
 */

var generateThemeVariables = function(params) {
   let output = '';
   let fontBody = params.bodyFont || 'system-ui';
   let fontMap = {
      'system-ui': 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif',
      'serif-classic': '\"Palatino Linotype\", \"Book Antiqua\", Palatino, \"Times New Roman\", serif',
      'serif-modern': '\"Georgia\", \"Times New Roman\", serif'
   };
   let fontValue = fontMap[fontBody] || fontMap['system-ui'];
   let heroHeight = params.homeHeroHeight || '220px';

      output += ` 
         :root {
             --main-width:   ${params.mainWidth};
             --sidebar-width:  ${params.sidebarWidth};
             --font-size: ${params.fontSize}rem;
             --theme-font-body: ${fontValue};
             --hero-height: ${heroHeight};
         }`;  

   return output;
}

module.exports = generateThemeVariables;
