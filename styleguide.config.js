module.exports = {
	title: 'UNICEF Material Ui',
    components: 'src/components/**/[A-Z]*.js',
    sections: [
        {
          name: 'Documentation',
          sections: [
            {
              name: 'Installation',
              content: './src/components/Header/Header.md',
              description: 'The description for the installation section'
            },
            {
              name: 'Configuration',
              content: './src/components/NavTabs/NavTabs.md'
            },
            {
              name: 'Live Demo',
              content: './src/components/NavTabs/NavTabs.md'
            }
          ]
        },
        
      ]
};