import {parseToNode} from '../../utlis/index.js'
const temp =`
    <div class="loading">
<img src="../../assets/img/loading.gif" class="loading-img" />
</div>
`
export default ()=>parseToNode(temp)[0]