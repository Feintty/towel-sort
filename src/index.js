
// You should implement your task here.
//Solution
module.exports = function towelSort (matrix) {
	if(matrix!==undefined){
		for(i=0;i<matrix.length;i++)
		{
			matrix[i]=(i%2!==0) ? matrix[i].reverse():matrix[i];
		}
		return matrix.flat(1);
	}
	else {
		return [];
	}
}