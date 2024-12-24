export const useGitFeedStore = defineStore('git/feed', () => {
    const commits = ref([])
    const isLoading = ref(false)
    const error = ref(null)

    const fetchCommits = async () => {
        isLoading.value = true
        error.value = null

        try {
            const repos = [
                'https://api.github.com/repos/minehub-it/frontend/commits',
                'https://api.github.com/repos/minehub-it/server-layer/commits',
                'https://api.github.com/repos/minehub-it/server-list/commits',
            ]

            const responses = await Promise.all(repos.map(repo => fetch(repo)))

            if (responses.some(response => !response.ok)) {
                throw new Error('Errore nel caricamento dei dati dai repository')
            }

            const commitsData = await Promise.all(responses.map(response => response.json()))

            commits.value = [...commitsData[0], ...commitsData[1]].sort((a, b) =>
                new Date(b.commit.committer.date) - new Date(a.commit.committer.date)
            )
        } catch (err) {
            error.value = err.message || 'Errore sconosciuto'
            console.error(err)
        } finally {
            isLoading.value = false
        }
    }

    return { commits, isLoading, error, fetchCommits }
})