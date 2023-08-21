const isDev = (import.meta.env.MODE === 'development')
const origin = location.origin

export const appList = [
    {
        name: 'vue2',
        url: isDev ? 'http://localhost:8002/child/vue2/' : `${origin}/child/vue2/`,
        alive: true
    },
    {
        name: 'vue3',
        url: isDev ? 'http://localhost:8003/child/vue3/' : `${origin}/child/vue3/`,
        alive: true
    },
    {
        name: 'vuevite',
        url: isDev ? 'http://localhost:8004/child/vuevite/' : `${origin}/child/vuevite/`,
        alive: true
    },
    {
        name: 'reactvite',
        url: isDev ? 'http://localhost:8005/child/reactvite/' : `${origin}/child/reactvite/`,
        alive: true
    }
]

export const findApp = (name) => {
    return appList.find(item => item.name === name)
}