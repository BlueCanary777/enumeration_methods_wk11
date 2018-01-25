var arrayTasks = {

	concat: function (arr1, arr2) {
		return (arr1.concat(arr2));

	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {

		// const mapNew = arr.map(x => x * x);

		const mapNew = arr.map(function(eachItemInArrayIWantToPassIn) {
			return eachItemInArrayIWantToPassIn * eachItemInArrayIWantToPassIn;
		})

		return (mapNew);
	},

	sum: function (arr) {
		var sum = 0;
		arr.forEach(function(n){
			sum+=n;
		})
		return (sum);
	},

	findDuplicates: function (arr) {
		let  getDuplicate = (arr) => arr.filter((value, index) => arr.indexOf(value) !== index);

  //var arr = [1, 2, 3, 4, 4, 5, 5, 5]  ([4, 5])
	},

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
