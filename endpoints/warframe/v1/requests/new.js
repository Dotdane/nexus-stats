'use strict'

const Method = require(blitz.config.core.endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Request extends Method {
    constructor(db) {
        super(db)

        // Modify schema
        this.schema.verb = "POST"
        this.schema.scope = "root-read-write"
    }

    /**
     * Main method which is called by MethoHandler on request
     */
    main(request) {
        return new Promise((resolve, reject) => {

            // Modify request
            request.createdAt = new Date()
            request.price = request.price === "null" ? null : request.price

            // Insert and resolve
            this.db.collection("requests").insertOne(request)
            resolve("Request processed. (" + JSON.stringify(request) + ")")
        })
    }
}

module.exports = Request
