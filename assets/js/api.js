/* Foram centralizadas as funções da api (consumo da api é a requisição http de get para o profile.json)*/


/* consumir o arquivo local "profile.json" ao invés de acessar a URL externa */
async function fetchProfileData() {
    const url = 'data/profile.json';/* mudei o caminha da url para o arquivo local */
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
