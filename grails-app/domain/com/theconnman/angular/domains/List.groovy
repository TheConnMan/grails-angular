package com.theconnman.angular.domains

import grails.rest.*

@Resource(uri='/lists', formats=['json', 'xml'])
class List {

	String name

	static hasMany = [items: Item]

	static constraints = {
		name()
	}

	String toString() {
		name
	}
}
