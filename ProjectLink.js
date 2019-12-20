class SomeBlocks {
    constructor (runtime) {
        /**
         * Store this for later communication with the Scratch VM runtime.
         * If this extension is running in a sandbox then `runtime` is an async proxy object.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }
    getInfo() {

        return {
            // making the id unique to allow multiple instances
            id: 'grundschule_tennenlohe_project_link',
            // the name of the student project
            name: 'ProjectLink',

            // colour for the blocks
            color1: '#4B4A60',
            // colour for the menus in the blocks
            color2: '#707070',
            // border for blocks and parameter gaps
            color3: '#4c97ff',

            // Machine Learning for Kids site icon
            //menuIconURI: this._icon,
            //blockIconURI: this._icon,

            // blocks to add to the new section
            blocks: [
                {
                    opcode: 'linkTo',
                    blockType: Scratch.BlockType.COMMAND,
                    text: {
                        default: 'Link to another scratch project',
                        id: 'projectlink.text.linkTo'
                    },
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'text'
                        }
                    }
                }
            ]
        }
    }
    linkTo({ TEXT }) {
        var txt = cleanUpText(TEXT, 1024);
        window.location.href(txt)
    }
}
