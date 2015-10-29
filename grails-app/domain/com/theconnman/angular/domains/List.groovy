package com.theconnman.angular.domains

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
