$(() => {


    function refresh() {
        $('#list').empty()
        $.get('/todo', (data) => {
            let lis = []

            for (let i = 0; i < data.length; i++) {
                // lis.push(`<li>${data[i]}</li>`)
                lis.push($('<li>').append(
                    $('<button>').text('X').attr('id', 'del').click((ev) => {
                        $.post('/delete', { i })
                        $(ev.target).parent().remove()
                    })
                ).append(data[i]))
                console.log(data[i])
            }
            $('#list').append(lis)
        })
    }
    refresh()

    $('#btn').click(() => {
        let task = $('#inp').val()
        $('#inp').val("")
            // console.log(task)
        $.post('/addtodo', { task })
            // refresh()
        $('#list').append($('<li>').append(
            $('<button>').text('X').attr('id', 'del').click((ev) => {
                $.post('/delete', { task })
                $(ev.target).parent().remove()
            })
        ).append(task))
        console.log(task)



    })
})