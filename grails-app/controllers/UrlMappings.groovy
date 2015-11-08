class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?(.$format)?"{
			constraints {
				// apply constraints here
			}
		}

		"/lists"(resources: 'list') {
			"/items"(resources: 'item')
		}
		"/"(controller:'toDo')
		"500"(view:'/error')
		"404"(view:'/notFound')
	}
}
