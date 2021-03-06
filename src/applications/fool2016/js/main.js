/**
 * @version 0.1.0
 * @author bigfact
 * @date 2016.04.01
 */

var doc = document;

var imgs = {
	"03cb0a18b4de0c1c3ba3e57cdbbb756f.jpeg": "03cb0a18b4de0c1c3ba3e57cdbbb756f-b8f2d64d42.jpeg",
	"0aad458541e77c135399345390e2dc81.jpeg": "0aad458541e77c135399345390e2dc81-ba38a62b75.jpeg",
	"17497bacf55623e454b7a32da995975c.jpeg": "17497bacf55623e454b7a32da995975c-49584e44f4.jpeg",
	"1d33aab556b051728babe1e7c78358a2.jpeg": "1d33aab556b051728babe1e7c78358a2-83b49cf828.jpeg",
	"28e83b63819f48dfab024f80ecca30e6.jpg": "28e83b63819f48dfab024f80ecca30e6-45161580d1.jpg",
	"29e42bfc3a7c7891e669e35c9b9794cc.jpeg": "29e42bfc3a7c7891e669e35c9b9794cc-ff100c0372.jpeg",
	"3553276673bfd0eba50f2ea329b97ccc.png": "3553276673bfd0eba50f2ea329b97ccc-eaeca5090a.png",
	"3dd2e857a33c41965b051fd06e0fe3b8.jpg": "3dd2e857a33c41965b051fd06e0fe3b8-ec0dda4448.jpg",
	"3e613afd8bd11345e4ce6d086dec0588.jpg": "3e613afd8bd11345e4ce6d086dec0588-8cdf143638.jpg",
	"3fdb26d13ef7b25d5f48e8e7462a8267.jpg": "3fdb26d13ef7b25d5f48e8e7462a8267-5491540e5f.jpg",
	"42304f15df518c26cbde6a1dbbc1145e.png": "42304f15df518c26cbde6a1dbbc1145e-0f02a042f8.png",
	"445372e7a9a622b81c7f2ebcb835208a.jpg": "445372e7a9a622b81c7f2ebcb835208a-bdfd3d237e.jpg",
	"4aabd09f39a86ba8a14028537142a50b.jpeg": "4aabd09f39a86ba8a14028537142a50b-798ac6c94c.jpeg",
	"4ab7a75c7b48bb41f8fb2c9a84a94ea3.jpg": "4ab7a75c7b48bb41f8fb2c9a84a94ea3-6cf72441d8.jpg",
	"503e640e41ef509abfefe555c9d88cb7.jpg": "503e640e41ef509abfefe555c9d88cb7-706f1c97d6.jpg",
	"5369dd7257e5585dfad3d96231df21b0.jpeg": "5369dd7257e5585dfad3d96231df21b0-c0fe9cf1fa.jpeg",
	"5c7ee64fd16dc423d48a5a76a3486a75.jpeg": "5c7ee64fd16dc423d48a5a76a3486a75-a2ce11a485.jpeg",
	"5f911aa9a845e7b03d47276bde9a650b.jpeg": "5f911aa9a845e7b03d47276bde9a650b-3da30c9063.jpeg",
	"6cafa75bfbd6fe0d7fb7ec69c194a5e2.jpg": "6cafa75bfbd6fe0d7fb7ec69c194a5e2-324de00488.jpg",
	"6d1f526cc7685dc2815d5c0a0867a749.jpeg": "6d1f526cc7685dc2815d5c0a0867a749-99270a9ef2.jpeg",
	"7f959d20762de74222bc1aa875674e78.jpeg": "7f959d20762de74222bc1aa875674e78-d223e7d871.jpeg",
	"856af09a647a643b9bd258655596c792.jpeg": "856af09a647a643b9bd258655596c792-cd4f967046.jpeg",
	"9912a28978955122b9c55f37ee56c3dd.jpeg": "9912a28978955122b9c55f37ee56c3dd-a7ce4232f4.jpeg",
	"9bd6a86b0d9aae7dd732fa985f9b3be6.jpg": "9bd6a86b0d9aae7dd732fa985f9b3be6-2d2562453e.jpg",
	"a1c4782d46cd5b25fb81113ac5ac6a4a.jpg": "a1c4782d46cd5b25fb81113ac5ac6a4a-57a9a98828.jpg",
	"aecba6c460bed18da1ce99920ddc0777.jpg": "aecba6c460bed18da1ce99920ddc0777-a8cb01f072.jpg",
	"b01a44e9c2742f974fc7a645a0946d10.jpg": "b01a44e9c2742f974fc7a645a0946d10-4241a8fc0b.jpg",
	"b1ca45754174309282c91558e12d628d.jpeg": "b1ca45754174309282c91558e12d628d-a61db1a303.jpeg",
	"b43ff98607adf767a1e4639536677e3a.jpg": "b43ff98607adf767a1e4639536677e3a-6be11ca1ad.jpg",
	"bbb0b4e56ece443b2e8b042ff91ef49f.jpeg": "bbb0b4e56ece443b2e8b042ff91ef49f-8f5c385efa.jpeg",
	"bde3c69ecc1bc1118402d5bc075d544c.jpg": "bde3c69ecc1bc1118402d5bc075d544c-cbb893cffd.jpg",
	"befbc821bd632b768d8eb7981a157095.jpg": "befbc821bd632b768d8eb7981a157095-91c9f433ab.jpg",
	"c1400e0a778049410f5e00aed8870700.jpeg": "c1400e0a778049410f5e00aed8870700-a0ff168499.jpeg",
	"c3bfd6e833d0cb209fb58929cac42119.jpeg": "c3bfd6e833d0cb209fb58929cac42119-d67860eed1.jpeg",
	"c79c1bfdec89272f0167243a200bb523.jpeg": "c79c1bfdec89272f0167243a200bb523-9033115b1a.jpeg",
	"c9e317f38d9dd6663c0add97bd6d5989.jpg": "c9e317f38d9dd6663c0add97bd6d5989-82cf20e81f.jpg",
	"ca66da4b3477e1d90cc6a4ba10d3b2e2.jpeg": "ca66da4b3477e1d90cc6a4ba10d3b2e2-a221e23848.jpeg",
	"ca9ae6eaf460c4f83de09977b153782e.jpg": "ca9ae6eaf460c4f83de09977b153782e-73d29f4b3b.jpg",
	"cf5f90fd7a1b25d7df3b75c374bdeead.jpg": "cf5f90fd7a1b25d7df3b75c374bdeead-aeed84aa81.jpg",
	"da241f04ad7ffb1c91610c5a56a7933a.jpeg": "da241f04ad7ffb1c91610c5a56a7933a-69a7cd62e1.jpeg",
	"dc58fbc8817c061b3328a7014e0ce4e9.jpg": "dc58fbc8817c061b3328a7014e0ce4e9-cd3655c8ff.jpg",
	"df1eed105ec1a937f63830f43eb2d4b8.jpeg": "df1eed105ec1a937f63830f43eb2d4b8-e0386d56de.jpeg",
	"dff20601209450b72afd6cbe64b36398.jpg": "dff20601209450b72afd6cbe64b36398-a6005427e9.jpg",
	"e1700f7ac692b3d5e340c7c04fa416a8.jpg": "e1700f7ac692b3d5e340c7c04fa416a8-7074d4dae6.jpg",
	"e60ff8b42b870f97da2a7e05c757a180.jpeg": "e60ff8b42b870f97da2a7e05c757a180-e1535f9bff.jpeg",
	"f65801b0710ceae97a2b414520dab8da.jpeg": "f65801b0710ceae97a2b414520dab8da-aae4036c6f.jpeg",
	"fd477c88e7e6b63259554074a012c355.jpg": "fd477c88e7e6b63259554074a012c355-fcdfd5b28b.jpg",
	"ff596d4ba5c3bf65848d432d18437a76.jpg": "ff596d4ba5c3bf65848d432d18437a76-d4c97f9853.jpg",
	"ff887ce91a1df828fdcdc5b79e3ab8fa.jpg": "ff887ce91a1df828fdcdc5b79e3ab8fa-e197529066.jpg"
};

var loading = doc.getElementsByClassName('loading')[0];
var circles = loading.getElementsByClassName('circle');
var len = circles.length;
var ilen = getImgsLength(imgs);
var imgindex = [];
var imgLoaded = 0;

for (var i = 0; i < len; i++) {
	var tmp = getRandomNum(0, ilen - 1);
	while (imgindex.indexOf(tmp) > 0) {
		tmp = getRandomNum(0, ilen - 1);
	}
	imgindex.push(tmp);
	var img = doc.createElement('img');
	img.src = 'img/' + getImgPath(imgs, tmp);
	img.onload = function () {
		imgLoaded++;
		imgLoaded == len && centerBtn.removeAttribute('disabled');
	};
	circles[i].appendChild(img);
}

/**
 * 中心按钮
 */
var centerBtn = doc.getElementsByClassName('centerbtn')[0];
var timerID = null;
centerBtn.addEventListener('mousedown', down, false);
centerBtn.addEventListener('touchstart', down, false);
centerBtn.addEventListener('mouseup', up, false);
centerBtn.addEventListener('touchend', up, false);
function down(e) {
	e.preventDefault();
	e.stopPropagation();
	timerID = setTimeout(function () {
		loading.style.display = 'block';
	}, 1000);
}
function up(e) {
	e.preventDefault();
	e.stopPropagation();
	if (typeof timerID === "number") {
		clearTimeout(timerID);
		loading.style.display = 'none';
	}
}

/**
 * 获取 img path
 * @param imgsobj img 数组对象
 * @index img 顺序
 * @returns img path
 */
function getImgPath(imgsobj, index) {
	var i = 0;
	for (var key in imgsobj) {
		if (i == index) {
			return key;
		}
		i++;
	}
}

/**
 * 获取 img 对象的长度
 * @param imgsobj img 对象
 * @returns img 对象的长度
 */ 
function getImgsLength(imgsobj) {
	var i = 0;
	for (var key in imgsobj) {
		i++;
	}
	return i;
}

/**
 * 获取随机数
 * @param Min 最小值
 * @param Max 最大值
 * @returns 介于最小值与最大值之间的一个随机数
 */
function getRandomNum(Min, Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	var tmp = Min + Math.round(Rand * Range);
	return tmp;
}