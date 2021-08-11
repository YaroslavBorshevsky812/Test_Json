

export function load(data) {
    return {
        type: 'LOAD',
        payload: data
    }
}

export function add(data, id) {
    return {
        type: 'ADD',
        payload: data,
        id: id
    }
}

export function del(id) {
    return {
        type: 'DELETE',
        id: id
    }
}