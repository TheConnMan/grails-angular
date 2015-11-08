package com.theconnman.angular.domains

import grails.rest.*

@Resource(uri='/items', formats=['json', 'xml'])
class Item {

	String name

	static belongsTo = [list: List]

	static constraints = {
		name()
	}

	String toString() {
		name
	}
}
