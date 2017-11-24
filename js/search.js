$(function () {
    $('#search').click(function () {
        var first_name = document.getElementById("fnamesearch").value;
        console.log("fname : " + first_name);

        axios.get('http://localhost:3000/users/search?first_name=' + first_name)
            .then(function (response) {
                console.log(response.data.length);
                if (response.data.length > 0) {
                    $('#panel').empty();
                    for (i = 0; i < response.data.length; i++) {
                        $('#panel').append(
                            '<tr><th scope="row" id="num"><center>' + response.data[i].id + '</center></th>' +
                            '<td id="fname">' + response.data[i].first_name + '</td>' +
                            '<td id="lname">' + response.data[i].last_name + '</td>' +
                            '<td id="role">' + response.data[i].role + '</td>' +
                            '<td id="exp">' + response.data[i].expired + '</td></tr>'
                        );
                    }
                } else {
                    $('#panel').empty();
                    $('#panel').append(
                        '<tr><th scope="row" id="num"><center>No data</center></th>' +
                        '<td id="fname">No data</td>' +
                        '<td id="lname">No data</td>' +
                        '<td id="role">No data</td>' +
                        '<td id="exp">No data</td></tr>'
                    );
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    });
});