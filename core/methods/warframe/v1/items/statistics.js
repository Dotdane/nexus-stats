'use strict'

const Method = require("../../../../Method.js")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Foo extends Method {
    constructor(db) {
        super(db)

        // Modify schema
        this.schema.resources = ["item"]
        this.schema.params = [{
                name: "component",
                type: "string",
                default: "",
                description: "Specifies item component to look up. No component returns full set data."
            },
            {
                name: "timestart",
                type: "number",
                default: () => {
                    return new Date().getTime() / 1 // current time
                },
                description: "Returns data recorded between timestart and timeend"
            },
            {
                name: "timeend",
                type: "number",
                default: () => {
                    return new Date(new Date().setDate(new Date().getDate() - 21)) / 1 // 3 weeks ago
                },
                description: "Returns data recorded between timestart and timeend"
            }
        ]
    }

    /**
     * Main method which is called by MethoHandler on request
     */
    main(item, component, timestart, timeend) {
        return new Promise((resolve, reject) => {
            resolve("statistics will be here")
        })
    }
}

module.exports = Foo