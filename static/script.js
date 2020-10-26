$(() => {

    function refresh() {
        $('#list').empty()
        $.get('/todo', (data) => {
            let lis = []
            for (let i = 0; i < data.length; i++) {
                lis.push(`<li>${data[i]}</li>`)
            }
            $('#list').append(lis)
        })
    }
    refresh()

    $('#btn').click(() => {
        let task = $('#inp').val()
        $('#inp').val("")
            // console.log(task)
        $.get(`/addtodo?task=${task}`)
        refresh()

    })
})