$(() => {

    function refresh() {
        // $('#list').empty()
        $.get('/todo', (data) => {
            for (let i = 0; i < data.length; i++) {
                $('#list').append(
                    $('<li>').text(data[i])
                )
            }
        })
    }
    refresh()

    $('#btn').click(() => {
        let task = $('#inp').val()
            // console.log(task)
        $.get(`/addtodo?task=${task}`)
        refresh()

    })
})