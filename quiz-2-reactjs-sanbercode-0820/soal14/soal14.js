const volumeBalok = (p, l, t) => {
	let panjang = p;
	let lebar = l;
	let tinggi = t;

	let volume = panjang * lebar * tinggi;
    return `Volume Balok (Panjang * Lebar * Sisi) =  ${panjang} * ${lebar} * ${tinggi} = ${volume}`;
}

const volumeKubus = (s) => {
	let sisi = s;
	let volume = sisi*sisi*sisi;
    return `Volume Kubus (Sisi * Sisi * Sisi) = ${sisi} * ${sisi} * ${sisi} = ${volume}`;
}

console.log(`
Volume Balok: ${volumeBalok(9,8,10)}cm
Volume Kubus: ${volumeKubus(6)}cm`);
