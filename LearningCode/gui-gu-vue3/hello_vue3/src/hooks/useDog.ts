import {onMounted, reactive} from "vue";
import axios from "axios";

export default function () {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4045.jpg'
    ])

    async function addDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    onMounted(() => {
        addDog().then(r => console.log('钩子'))
    })

    return {dogList, addDog}
}