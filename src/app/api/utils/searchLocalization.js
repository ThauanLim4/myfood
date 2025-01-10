export const searchLocalization = async () => {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                const urlMap = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

                try {
                    const response = await fetch(urlMap);
                    if (!response.ok) {
                        return reject('Erro ao buscar a localização');
                    }
                    const result = await response.json();
                    const resultFilted = result.address.road + " - " + result.address.city_district;
                    resolve(resultFilted);
                } catch (erro) {
                    reject("Erro ao obter o endereço: " + erro);
                }
            }, (error) => {
                reject("Erro ao obter a localização: " + error.message);
            });
        } else {
            reject("Geolocalização não está disponível no navegador");
        }
    });
};