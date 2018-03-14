import ajax from './ajax'
// import dialog from './dialog'
import common from './common'
import ossUploader from './oss-uploader'
var tools = Object.assign({}, ajax, common, ossUploader)
export default tools
