const getAge = function (birth, death){
	if(!death){
		death = new Date().getFullYear();
	}
	return death - birth;
}

const findTheOldest = function(people) {
	const peopleMapped = people.map(person => (
		{
			name: person.name,
			age: getAge(person.yearOfBirth,person.yearOfDeath),
		}));
	const peopleSorted = peopleMapped.sort((a, b) => b.age - a.age)
	console.log(peopleSorted);
	return peopleSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
