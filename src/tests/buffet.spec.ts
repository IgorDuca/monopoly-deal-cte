test('buffet_payout', () => {
    var numbers = [1, 1, 3];

    function findLessCost() {
        var num_pairs = [];

        for(var i = 0; i < numbers.length; i++) {
            if(i == 0) num_pairs.push(numbers[i]);
            if(num_pairs[0] + numbers[i] >= 2) {
                if(num_pairs.length == 1) {
                    num_pairs.push(numbers[i])
                } else if(num_pairs[1] > numbers[i]) {
                    num_pairs[1] = numbers[i]
                };
            }; 
        };

        console.log(num_pairs)
        return num_pairs;
    };

    expect(findLessCost()).toEqual([1, 1]);
})