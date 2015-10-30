package com.theconnman.angular.controllers

import com.theconnman.angular.domains.List
import grails.converters.JSON

class ApiController {

	def list() {
		render(List.list() as JSON)
	}
}
