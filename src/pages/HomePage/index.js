import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {fonts} from '../../fonts';
import {Input} from '../../components/atoms';
import {
  IBerita1,
  IBerita2,
  IBerita3,
  IBerita4,
  IBerita5,
  IBerita6,
  IBerita7,
  ISearch,
  IBerita8,
  IBerita9,
  IBerita10,
  IBerita11,
  IBerita12,
  IBerita13,
  IBerita14,
  IBerita15,
  IBerita16,
  IBerita17,
  IBerita18,
  IBerita19,
  IBerita20,
  IBerita22,
  IBerita21,
} from '../../assets';
import {Card} from '../../components/News';
import Cate2 from '../../components/News';

const HomePage = ({navigation}) => {
  const [kategori, setKategori] = useState([
    {namaKategori: 'Random', selected: true},
    {namaKategori: 'Sports', selected: false},
    {namaKategori: 'Life', selected: false},
    {namaKategori: 'Animals', selected: false},
    {namaKategori: 'Food', selected: false},
    {namaKategori: 'History', selected: false},
    {namaKategori: 'Health', selected: false},
    {namaKategori: 'Politics', selected: false},
    {namaKategori: 'Gaming', selected: false},
    {namaKategori: 'Nature', selected: false},
    {namaKategori: 'Art', selected: false},
    {namaKategori: 'Fashion', selected: false},
    {namaKategori: 'Middle East', selected: false},
  ]);

  const handleCategoryPress = index => {
    const updatedKategori = kategori.map((item, i) => {
      if (i === index) {
        return {...item, selected: !item.selected};
      } else {
        return {...item, selected: false};
      }
    });
    setKategori(updatedKategori);
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.wrapper}>
          <Text style={style.text1}>Browse</Text>
          <Text style={style.text2}>Discover things of this world</Text>
        </View>
        <View style={style.sc}>
          <Input gmbr={ISearch} plc="Search" />
        </View>
        <View style={style.list}>
          <FlatList
            data={kategori}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[
                  style.catte,
                  {backgroundColor: item.selected ? '#6D9886' : '#F3F4F6'},
                ]}
                onPress={() => handleCategoryPress(index)}>
                <Text
                  style={[
                    style.textcate,
                    {color: item.selected ? '#FFFFFF' : '#7C82A1'},
                  ]}>
                  {item.namaKategori}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={style.news}>
          <Card
            img={IBerita1}
            label="Berapa Sebenarnya Jumlah Kaki yang Dimiliki Kaki Seribu?"
            tgl="Monday, 13 March 2022"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita1,
                titleDetail:
                  'Berapa Sebenarnya Jumlah Kaki yang Dimiliki Kaki Seribu?',
                textDetail1: 'Ahmad Naufal Dzulfaroh',
                textDetail2:
                  'Kaki seribu merupakan salah satu hewan yang kerap dijumpai di lingkungan rumah. Jumlah kaki yang begitu banyak dan tersebar di sepanjang tubuhnya membuat hewan ini disebut dengan kaki seribu Namun, benarkah jumlah kaki yang dimiliki hewan ini berjumlah seribu? Dikutip dari Science Focus, tidak ada satu pun spesies kaki seribu yang pernah ditemukan memiliki kaki sebanyak itu. Baca juga: Apakah Makan Daging Hewan yang Terkena Kanker Picu Risiko Kanker? Jumlah kaki Kaki seribu termasuk dalam filum organisme yang disebut arthropoda, kategori yang mencakup invertebrata beragam seperti laba-laba, kalajengking, dan kupu-kupu. Spesies umum artropoda penggali ini memiliki antara 40 dan 400 kaki. Angka ini lebih dari cukup untuk menggerakkan tubuh kaki seribu ke depan. Sementara itu, para ilmuwan memilih awalan bahasa Latin "mili-" yang berarti 1.000 untuk menggambarkan banyaknya jumlah kaki hewan ini. Pasalnya, para ilmuwan tidak mengetahui secara persis jumlah kaki hewan ini. Dikutip dari How Stuff Works, semua arthropoda memiliki kesamaan kerangka luar yang keras, tubuh tersegmentasi, dan kaki bersendi. Bedanya, setiap segmen tubuh kaki seribu memiliki dua pasang kaki, bukan satu pasang.Hewan adaptif Memiliki begitu banyak kaki adalah bagian dari apa yang membuat kaki seribu begitu adaptif. Bukti fosil menunjukkan bahwa kaki seribu adalah salah satu hewan darat pertama yang berarti mereka telah ada selama sekitar 400 juta tahun. Kembali pada periode konifera, sekitar 300 juta tahun yang lalu, spesies kaki seribu yang dikenal sebagai Arthropleura tumbuh dengan panjang 2 meter dan lebar 0,5 meter. Saat ini, kaki seribu memiliki ukuran mulai dari 3 milimeter hingga sekitar 0,3 meter. Para ilmuwan telah menemukan sekitar 12.000 spesies di setiap benua kecuali Antartika, tetapi diperkirakan ada sebanyak 80.000 spesies di Bumi ini.Fungsi kaki banyak Kaki seribu memakan serasah daun yang berlimpah di seluruh dunia, meskipun tidak kaya akan nutrisi. Ini berarti kaki seribu menghabiskan sebagian besar waktunya di tanah, di bawah dedaunan, dan bebatuan. Hal yang membuat mereka begitu efektif untuk berkeliling di habitat yang padat ini adalah jumlah kaki mereka. Ketika kaki seribu menetas, mereka hanya memiliki beberapa pasang kaki. Kemudian mereka tumbuh melalui proses yang disebut molting. Proses ini melibatkan pelepasan kerangka luar dan menumbuhkan kerangka baru. Setiap kali melakukan ini, kaki seribu juga menumbuhkan segmen baru dan karenanya memiliki dua pasang kaki baru.',
              });
            }}
          />
          <Card
            img={IBerita2}
            label="Nenek 77 Tahun Ini Nikahi Dirinya Sendiri setelah Pernikahan..."
            tgl="Tuesday, 19 April 2022"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita2,
                titleDetail:
                  'Nenek 77 Tahun Ini Nikahi Dirinya Sendiri setelah Pernikahan Pertama Berantakan',
                textDetail1: 'WASHINGTON',
                textDetail2:
                  'Seorang nenek berusia 77 tahun di Ohio, Amerika Serikat (AS), \n telah mengadakan pernikahan mewah yang tidak biasa karena dia menikahi dirinya sendiri. Itu dia jalani setelah sakit hati seumur hidup yang dirasakan akibat pernikahan pertamanya yang berantakan. Menikahi dirinya sendiri adalah mimpi Dorothy "Dottie" Fideli yang menjadi kenyataan. Pernikahan yang tidak biasa ini digelar dalam sebuah upacara di panti jompo. Dottie, yang mengenakan gaun pengantin putih yang indah dan kerudung serta memegang karangan bunga mawar sutra, menjelaskan bahwa pernikahan yang tidak biasa ini adalah sesuatu yang selalu ingin dia lakukan, dan melihatnya sebagai kesempatan kedua untuk melakukan sesuatu yang akan membuatnya bahagia. Pernikahan pertamanya, sebuah upacara sipil di gedung pengadilan pada tahun 1965, berantakan setelah bertahan sembilan tahun. Dottie tahu pernikahan pertamanya tidak akan bertahan lama ketika suaminya langsung kembali bekerja setelah kebaktian. "Saya mengenakan gaun hitam, jadi saya sudah ditakdirkan sebelum saya mulai," katanya kepada wartawan. Dottie, yang memiliki tiga anak, berkata, "Ini adalah sesuatu yang selalu saya inginkan. Saya ingin menikah dan memiliki kehidupan yang bahagia, tetapi hal-hal tidak berjalan seperti itu, dan sekarang saya memiliki kesempatan kedua untuk melakukan sesuatu. Ini akan membuat saya bahagia." Manajer panti jompo Dottie, Robert Geiger, bertindak sebagai pendeta pernikahan dan, setelah kebaktian di Ohio pada 13 Mei, para tamu disuguhi pesta resepsi mewah dengan kue pernikahan dua tingkat. Putri Dottie, Donna Pennington, adalah perencana pernikahan sang ibu. Dialah yang membeli gaun serta bunga dan memasak untuk para tamu. "Dia berkata, Oh, Bu, ya, ayo lakukan. Aku akan mengambil gaunmu, aku akan mengambilkan semuanya untukmu, kata Dottie menirukan ucapan putrinya. Pensiunan ibu tiga anak ini dikenal melakukan hal-hal nyentrik hingga membuat orang tertawa di rumahnya. Ketika saya melihat mereka semua di tempat pembuangan sampah, saya memakai salah satu pakaian saya dan berdandan dan turun, dan mereka tersenyum," katanya. Dottie memiliki pesan yang mendalam untuk semua orang: Semua orang mengambil ini di luar lily. Dan mereka menjalani hidup mereka dan mereka pikir mereka bahagia dan semuanya akan keren, tetapi mereka tidak mempertimbangkan bagian dalam, kelopak kecil di dalamnya adalah apa yang penting. Dia menambahkan, Di situlah cinta Tuhan mengalir, di situlah Dia memberimu hikmat dan Dia memberimu harapan. Cinta adalah hal terpenting di dunia ini, dan jika kamu mencintai Tuhan dan mencintai dirimu sendiri, dunia ini akan menjadi ladang mawar. Dottie, seperti dikutip The Mirror, Kamis (18/5/2023), sangat gembira dengan upacara tersebut dan berkata kepada putrinya, ini adalah hal terbaik yang pernah saya miliki, selain memiliki kalian, anak-anak. Inilah yang selalu saya inginkan.Meski pernikahan seperti ini aneh, Dottie bukan satu-satunya wanita yang menjalaninya. Tahun lalu, wanita India bernama Kshama Bindu (25) juga menikahi dirinya sendiri dalam sebuah upacara tradisional. Pernikahan tak biasa yang dikenal dengan istilah self-marriage atau sologami dijalani Bindu pada 11 Juni 2022. Semua ritual dan upacara, termasuk pheras dan penerapan sindoor dijalani Bindu.',
              });
            }}
          />
          <Card
            img={IBerita3}
            label="Begini Jadinya Kalau Bulan Meledak"
            tgl="Wednesday, 25 May 2022"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita3,
                titleDetail: 'Begini Jadinya Kalau Bulan Meledak',
                textDetail1: 'Renatha Swasty',
                textDetail2:
                  'Setiap planet memiliki rotasi masing-masing yang bergerak mengelilingi matahari dalam sistem tata surya. Setiap planet juga memiliki satelit masing-masing yang saling memberikan pengaruh gravitasi. Seperti halnya Bumi, memiliki satelit bulan yang memberikan manfaat besar terhadap kelangsungan bumi dan kehidupannya. Lalu, apa jadinya bila satelit bumi ini, yaitu Bulan meledak dan hilang? Simak penjelasannya dikutip dari laman Kelas Pintar: Bumi dan bulan hanya berjarak 22.500 km. Asal mula Bulan merujuk pada beberapa penjelasan mengenai proses pembentukan Bulan, satelit alami Bumi. Teori yang paling dikenal adalah hipotesis tubrukan besar. Dalam hipotesis tubrukan besar menyatakan Bulan terbentuk dari puing-puing yang tersisa dari tubrukan antara Bumi dan benda seukuran planet Mars yang disebut Theia, sekitar 4,5 miliar tahun lalu. Hipotesis tubrukan besar adalah hipotesis ilmiah yang paling diakui saat ini tentang proses terbentuknya Bulan. Kehadiran Bulan menjadi satelit Bumi memberikan pengaruh besar terhadap Bumi. Bulan tetap berada di orbitnya karena gaya gravitasi yang diberikan Bumi, tetapi Bulan juga memberikan gaya gravitasi ke bumi. Hal itu menyebabkan pergerakan lautan Bumi membentuk jalur pasang surut Bumi. Manfaat Bulan bagi Bumi Bulan adalah satelit alami Bumi satu-satunya dan menjadi satelit terbesar kelima dalam Tata Surya. Berdasar ukuran planet, Bulan dengan diameter 27 persen dan kepadatan 60 persen dibandingkan dengan bumi. Bulan disebut sebagai satelit Bumi karena bergerak mengelilingi Bumi. Diperkirakan terbentuk sekitar 4,51 miliar tahun lalu, tidak lama setelah Bumi terbentuk. Berbeda dengan Bumi, Bulan tidak punya atmosfer. Ini karena Bulan memiliki ukuran lebih kecil dengan medan magnet lemah. Sebaliknya, Bumi memiliki lebih banyak massa untuk menahan atmosfer serta medan magnet kuat yang melindunginya. Berikut manfaat besar bulan: 1. Menstabilkan ikliBulan memiliki peranan penting bagi perubahan iklim di Bumi. Perubahan iklim ini terjadi karena Bulan membatasi rotasi Bumi. Bila rotasi Bumi tidak dibatasi Bulan, maka pergerakan akan terlalu cepat. Rotasi yang terlalu cepat akan membuat suhu Bumi menurun drastis. Hal itu terjadi karena Matahari tidak memiliki cukup waktu menghangatkan Bumi.',
              });
            }}
          />
          <Card
            img={IBerita4}
            label="Hidungnya Hilang karena Kanker, Wanita Prancis Buat yang Baru di.."
            tgl="Thursday, 30 June 2022"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita4,
                titleDetail:
                  'Hidungnya Hilang karena Kanker, Wanita Prancis Buat yang Baru di Tangan',
                textDetail1: 'Jagad Jungkir Balik',
                textDetail2:
                  'Seorang wanita yang kehilangan hidungnya karena kanker delapan tahun lalu berhasil menumbuhkan hidung baru di lengannya. Sebagian hidung asli milik perempuan bernama Cecile itu harus diangkat pada tahun 2013. Itu terpaksa dilakukan setelah perempuan yang tinggal di Toulouse Prancis didiagnosis menderita kanker sinus. Meskipun operasi berhasil menghilangkan kanker, hal itu membuatnya terlalu sadar diri untuk meninggalkan rumahnya dan menghilangkan indra penciumannya. The Daily Mail melaporkan, sebelum perawatan kankernya, dokter telah membuat hidung yang dibuat khusus menggunakan biomaterial cetak 3D dan menyimpannya di atas es sampai teknologi mampu melakukannya. Namun tahun ini, mereka dapat menanamkannya di bawah kulit lengan bawahnya di mana sel dan pembuluh darah tumbuh ke dalam perangkat selama dua bulan. Mereka kemudian menanamkan hidung baru ke wajahnya dan pembuluh darah di dalamnya menempel di pelipisnya. Cecile yang berusia 50 tahun mengatakan dia senang dengan hasilnya, terutama karena sekarang dia bisa bernapas lebih baik dan mencium aroma kebunnya. Dia belum bisa merasakan hidungnya, tetapi operasi lebih lanjut akan membantu dalam hal ini. "Saya bisa keluar, saya hidup kembali," ujarnya kepada 20 Minutes.“Sungguh ajaib, biomaterial ini adalah pilihan terakhir saya dan saya salut dengan penelitian dan kerja para dokter yang membantu saya bertahan," imbuhnya. "Saya mengurung diri di dalam rumah selama delapan tahun terakhir. Ketika Anda sakit, Anda mengasingkan diri dan wajah adalah yang pertama kali Anda lihat," ujarnya seperti dikutip dari The Mirror, Minggu (13/11/2022). Sebelum menumbuhkan hidung baru, dokter telah mencoba memberikan cangkok kulit Cecile untuk menggantikan jaringan yang hilang, tetapi mati. Dia juga diberi prostetik, tetapi berjuang untuk mempertahankannya. Saat itulah ahli bedah Dr Agnes Dupret-Bories dan Dr Benjamin Valerie bertanya apakah dia tertarik untuk menumbuhkan kembali hidungnya. Mereka memilih untuk menanamkan perangkat hidung di lengan bawah karena kulit di sana lebih tipis, mirip dengan di wajah. Cecile harus mengunjungi rumah sakit secara teratur saat kulitnya tumbuh untuk memastikannya berkembang dengan baik dan tidak ada kerusakan. Setelah dua bulan, hidungnya cukup tumbuh untuk diangkat ke wajahnya. Untuk mengganti kulit yang diambil dari lengannya, mereka menggunakan cangkok dari pahanya.Dia tinggal di rumah sakit selama 10 hari dan diberi antibiotik, sebelum kembali ke rumah. Pada bulan Mei terungkap bahwa seorang pria Inggris memiliki penis baru yang ditransplantasikan ke daerah genitalnya, setelah menumbuhkannya di lengan bawahnya.',
              });
            }}
          />
          <Card
            img={IBerita5}
            label="Tertidur Saat Main Petak Umpet, Bocah Bangladesh Ini Terbangun di Malaysia"
            tgl="Friday, 5 August 2022"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita5,
                titleDetail:
                  'Tertidur Saat Main Petak Umpet, Bocah Bangladesh Ini Terbangun di Malaysia',
                textDetail1: 'Jagad Jungkir Balik',
                textDetail2:
                  'Seorang bocah lelaki berusia 15 tahun ditemukan ditemukan selamat dalam sebuah kontainer di Malaysia . Ia dalam kondisi kelelahan setelah tertidur dan bangun enam hari kemudian 2.000 mil dari tempat dia berasal. Bocah itu terjebak di dalam kontainer saat bermain petak umpet dengan teman-temannya di Chittagong, Bangladesh , pada 11 Januari. Setelah tertidur, dia terkunci di dalam peti kemas dan berlayar dengan kapal peti kemas Integra melintasi Samudera Hindia keesokan harinya. Dia ditemukan oleh staf pelabuhan dan polisi Malaysia di Port Klang hampir seminggu kemudian, pada 17 Januari, dengan kondisi kelelahan, dehidrasi, dan menangis minta makan. Bocah itu, yang diidentifikasi hanya sebagai Fahim, ditemukan dengan kondisi demam dan dibawa ke Rumah Sakit Tengku Ampuan Rahimah terdekat untuk mendapatkan perawatan, di mana kondisinya digambarkan stabil. Fahim ditemukan setelah seorang anggota staf mendengar ketukan di salah satu kontainer. Pasukan Polisi Laut, Departemen Imigrasi setempat, dan Departemen Kesehatan kemudian datang untuk menyelidiki. Fahim difilmkan keluar dari peti dikelilingi oleh staf dan otoritas lokal. Dalam video tersebut, dia jelas mengalami dehidrasi dan bingung, serta tidak dapat berbicara bahasa lokal. Dia berbicara untuk menampakkan diri kepada para petugas sebelum ditempatkan di atas tandu, dikeluarkan, dan ditutupi selimut. Fahim kemudian dibawa ke rumah sakit, di mana dia tinggal untuk saat ini.Pihak berwenang Malaysia pada awalnya khawatir Fahim adalah korban perdagangan manusia, tetapi segera berhasil berkomunikasi dengan anak laki-laki tersebut, yang sedang dalam pemulihan. "Tidak ada kesalahan dalam insiden itu," kata Asisten Komisaris Polisi setempat Cha Hoong Fong seperti dikutip dari Daily Mail, Sabtu (28/1/2023).',
              });
            }}
          />
          <Card
            img={IBerita6}
            label="Arab Saudi Bersiap untuk Musim  Haji Terbesar yang Pernah Ada"
            tgl="Saturday, 10 September 2022"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita6,
                titleDetail:
                  'Arab Saudi Bersiap untuk Musim Haji Terbesar yang Pernah Ada',
                textDetail1: 'Esnoe Faqih Wardhana',
                textDetail2:
                  'Arab Saudi telah meluncurkan rencana operasional haji terbesar yang pernah ada. Persiapan dilakukan untuk menyambut musim haji yang akan datang, setelah dicabutnya pembatasan jumlah Jemaah selama pandemi COVID-19. Seperti dilaporkan Al Arabiya, Senin (5/6/2023), sebanyak 14.000 anggota staf yang memecahkan rekor, serta lebih dari 8.000 sukarelawan, akan dikerahkan di lapangan untuk membantu jutaan jemaah yang diharapkan ikut serta dalam haji tahun ini.Musim haji tahun ini diperkirakan akan dimulai pada 26 Juni, namun masih menunggu pengumuman resmi oleh pihak berwenang. “Rencana operasional musim haji tahun ini merupakan yang terbesar dalam sejarah kepresidenan, setelah berakhirnya pandemi corona dan pengumuman kepulangan jutaan jemaah haji, sesuai sistem pelayanan terpadu yang disiapkan para kepemimpinan,” jelas Presiden Presidensi Umum untuk Urusan Dua Masjid Suci, Dr. Abdulrahman al-Sudais. Kerajaan telah mencabut pembatasan jumlah jemaah haji yang diizinkan untuk melakukan haji untuk pertama kalinya sejak pandemi virus Corona dimulai. Sekitar 2,6 juta orang diperkirakan akan mengambil bagian dalam ritual Islam tahun ini.Sebanyak 300.000 eksemplar Alquran akan didistribusikan di Masjidil Haram di Mekkah dan Masjid Nabawi di Madinah, menurut al-Sudais. Layanan dan panduan terjemahan akan tersedia di seluruh situs dalam 51 bahasa untuk melayani jutaan orang yang datang dari seluruh dunia. Kepresidenan Umum juga akan mendistribusikan 40 juta liter air Zamzam di Dua Masjid Suci melalui lebih dari 30.000 titik distribusi, menyediakan setidaknya dua juta botol untuk jamaah setiap hari. Teknologi digital termasuk aplikasi seluler dan robot di lokasi akan dimanfaatkan untuk meningkatkan pengalaman jamaah secara keseluruhan.',
              });
            }}
          />
          <Card
            img={IBerita7}
            label="Unik! Kereta Api di Kanada Bisa Dicegat Seperti Angkot"
            tgl="Sunday, 16 October 2022"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita7,
                titleDetail:
                  'Unik! Kereta Api di Kanada Bisa Dicegat Seperti Angkot',
                textDetail1: 'Agregasi BBC Indonesia',
                textDetail2:
                  'Jalur kereta di Kanada adalah salah satu jalur kereta paling indah di dunia. Kelebihan lainnya, kereta ini bisa dicegat di jalan.Sederet mobil berhenti, klakson berbunyi sebelum alasan penundaan menjadi jelas: seekor rusa dan anaknya berlari di antara lalu lintas, lalu melompat ke trotoar dan melanjutkan perjalanan ke arah stasiun kereta.Saya berada di pusat kota Jasper di Alberta, Kanada, sebuah kota pegunungan yang mengingatkan pada desa ski, dengan rusa berkeliaran dan toko suvenir yang menjual semprotan anti beruang.Terletak di tengah Taman Nasional Jasper, kota pegunungan yang hanya berpenduduk 4.200 jiwa ini adalah persimpangan utama di beberapa rute kereta api terbesar di Kanada.Ada kereta ketiga yang kurang terkenal yang berangkat dari Jasper tiga kali seminggu, membawa penumpang ke tempat-tempat terpenci dan jauh di British Columbia.Jalur ini selesai dibangun oleh Grand Trunk Pacific Railway pada tahun 1914, dan membentang sepanjang 1.160 km, menghubungkan Jasper ke Prince Rupert, sebuah kota pelabuhan di pesisir barat laut Kanada.Train 5 yang dikelola VIA Rail, atau biasa disebut "Skeena" atau "Rupert Rocket" oleh warga lokal ini berdurasi perjalanan dua hari, dengan pemberhentian semalam di kota Prince George.Jalur ini hampir tidak dikenal oleh wisatawan internasional, tetapi merupakan salah satu perjalanan kereta paling indah di dunia, sekaligus menyediakan jalur utama bagi masyarakat lokal.Saya menaiki Skeena pada sebuah sore musim gugur yang indah: langit berwarna biru elektrik, Pegunungan Rocky berkilau di bawah sinar matahari saat kami meluncur keluar dari Jasper dan segera menambah kecepatan.Di bordes, bagian atas pintunya dikunci seperti pintu koboi, jadi saya mengayunkannya sampai terbuka saat kelopak bunga dandelion terbang dibawa angin.Jalur kereta ini berkelok-kelok menyusuri Sungai Fraser, rumah berbagai jenis ikan. Dari seberang sungai, seorang pemancing melambaikan tangan dari tepian yang mirip pantai.Selama satu jam pertama, jeram biru kehijauan bergemericik di tepi jalan, elang emas membumbung tinggi, dan aroma tajam cemara balsam dan pinus menerpa melalui pintu yang terbuka.Tracy MacLean, manajer layanan di kapal, mengumumkan bahwa Danau Moose sudah dekat. Airnya sejelas selembar kaca, hutan memantul ke permukaannya yang sempurna.Melaju cepat di dekat permukaan batu yang dilapisi dinding es, kami mengitari tikungan sampai melihat Gunung Robson menjulang naik menembus biru, puncak tertinggi di Pegunungan Rocky Kanada. Kumpulan awan di puncaknya membuat gunung itu seperti gunung berapi yang mengeluarkan asap, dengan gletser di sisi-sisinya.Di antara danau-danau tapal kuda, hamparan bunga snapdragon kuning dan tumbuhan conifer yang halus bisa dilihat dari kereta.Kita bisa melihat jejak-jejak industri pada masa lalu dan sekarang, di mana pendulang emas, petani dan pencari ikan membentuk komunitasnya yang menyebar.Menjelang sore, saat penumpang tertidur atau menerawang untuk melihat rusa besar dan karibu, kereta mulai melambat, lalu tiba-tiba berhenti di dekat hutan.Terdengar gumaman di gerbong dan beberapa penumpang menjulurkan leher untuk melihat apakah ada penampakan satwa liar.Sebagai layanan kereta yang bisa dicegat, rupanya Skeena berhenti untuk mengangkut seorang pemetik jamur yang muncul dari balik pepohonan."Kami satu-satunya sumber transportasi untuk masuk dan keluar dari daerah terpencil," kata MacLean, menjelaskan bahwa para insinyur dan staf selalu tahu dan mencari penumpang tetap yang naik dan turun kereta: pertapa, penduduk daerah terpencil dan nelayan."Tepat sebelum kami menurunkan mereka, mereka akan berkata: Sepertinya saya akan keluar dari semak seminggu, Jumat depan, perhatikan ya." Saya kemudian mengkomunikasikannya dengan para insinyur, mereka mencatat dan memperhatikan jika ada orang itu."Dia menambahkan: "Pada salah satu perjalanan saya, saya menjemput dua pemburu yang tersesat dan tidak dapat menemukan jalan kembali ke truk mereka. Mereka mendengar suara kereta, jadi mereka turun ke rel. Ketika naik, mereka kotor, sangat kedinginan, lapar, dan sangat senang melihat manusia lain sehingga saya bahkan tidak menagih ongkos mereka."Setelah sebagian besar penumpang turun dan turis-turis masuk ke hotel terdekat, saya berbicara dengan petugas kereta api Ed Neis yang membari tahu bahwa Skeena dulunya adalah kereta malam."Kami punya gerbong restorasi di sini, kamar kecil di belakang, indah sekali dulu. Kalau tidak salah dihapus pada tahun 1993," kata Neis."Penurunan ekonomi sangat buruk, sehingga jawatan kereta api bertemu walikota setempat dan membuat kesepakatan dengan komunitas ini untuk membawa bisnis kepada mereka. Mereka setuju kereta ini akan berhenti di Prince George. Jika kita kembalikan lagi jadi langsung, penumpang akan naik."Keesokan paginya, kereta berangkat saat penumpang sedang sarapan, mengikuti lekukan Sungai Nechako, anak sungai utama, ke Sungai Fraser yang kembali terlihat di bawah buih dan gemericik putih.Di kota Smithers, sejumlah perempuan penduduk asli yang disebut Bangsa Pertama naik kereta dan, setelah jeda dalam perjalanan, MacLean menyebutkan Highway of Tears - jalan sepanjang 725 km yang sejajar dengan rel.Sejak 1950-an, sejumlah perempuan muda hilang saat menumpang antara Smithers dan Prince Rupert, karena kemiskinan dan kurangnya transportasi umum yang parah di sepanjang Highway 16 selain bus dua kali seminggu.Angka resmi menunjukkan bahwa jumlahnya sekitar 20, tetapi keluarga dan aktivis masyarakat memperkirakan bahwa lebih dari 50 perempuan hilang atau ditemukan tewas. Menurut MacLean: "Seorang perempuan muda di British Columbia utara yang memilih untuk menumpang di Highway 16 timur atau barat dari Prince George, artinya sudah mengucapkan selamat tinggal kepada orang yang dicintai. Penduduk asli naik dan turun dari kereta ini untuk pergi ke pertemuan dan acara atau tidak ada cara lain selain bus itu."Kereta melintasi jembatan yang rapuh, saya melirik ke bawah ke badan air yang mengalir di bawah rel sementara penumpang lain memandang ke hutan untuk mencari grizzlies dan beruang hitam.Tepat ketika kami melewati stasiun Kwinitsa, saya melihat seekor beruang hitam kecil berlari menjauh dari rel. Saya menyadari bahwa apa yang menjadi salah satu perjalanan terbesar dalam hidup saya hanyalah perjalanan biasa untuk yang lain.Menjelang sore, Sungai Skeena muncul dari utara dan tetap dekat dengan kereta, menyemangatinya hingga garis finis.Namanya diambil dari bahasa asli Gitxsan, yang berarti "sungai kabut", Sungai Skeena mengalir melalui ngarai dan melewati pegunungan sebelum akhirnya memisahkan diri dan mengalir ke Samudra Pasifik, meninggalkan kami untuk melakukan perjalanan ke Prince Rupert sendirian.',
              });
            }}
          />
          <Card
            img={IBerita8}
            label="Kecelakaan Kereta Api Terburuk India dalam Abad Ini, Diduga Disebabkan Perubahan Interlocking Elektronik"
            tgl="Monday, 21 November 2022"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita8,
                titleDetail:
                  'Kecelakaan Kereta Api Terburuk India dalam Abad Ini, Diduga Disebabkan Perubahan Interlocking Elektronik',
                textDetail1: 'Susi Susanti, Okezone ',
                textDetail2:
                  ' Kecelakaan maut tiga kereta di India timur yang menewaskan 275 orang terus menarik perhatian dunia internasional. Dari 1.175 orang yang terluka dibawa ke rumah sakit, 793 telah dipulangkan. Beberapa keluarga masih mencari orang yang mereka cintai.Menteri perkeretaapian India Ashwini Vaishnaw telah menyatakan kesalahan sinyal menyebabkan kecelakaan kereta api di Odisha tesrebut.Dia menduga "perubahan interlocking elektronik" kemungkinan menjadi penyebabnya. Dalam persinyalan kereta api, sistem interlocking elektronik menetapkan rute untuk setiap kereta api di area tertentu, memastikan pergerakan kereta api yang aman di sepanjang jalur.Dia juga mengatakan pihak yang bertanggung jawab atas kecelakaan maut itu telah diidentifikasi. Namun dia tidak menjelaskan lebih lanjut.Dewan Kereta Api India mengatakan ada semacam gangguan sinyal. Pemerintah juga akan segera merilis sebuah laporan tentang kecelakaan kereta api terburuk di India abad ini.',
              });
            }}
          />
          <Card
            img={IBerita9}
            label="Viral Rafathar dan Rayyanza Foto Bareng Ricardo Kaka, Lirikan Mata Cipung Bikin Warganet Salfok"
            tgl="Tuesday, 27 December 2022"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita9,
                titleDetail:
                  'Viral Rafathar dan Rayyanza Foto Bareng Ricardo Kaka, Lirikan Mata Cipung Bikin Warganet Salfok',
                textDetail1: 'Agustin Setyo Wardani',
                textDetail2:
                  'Legenda sepak bola dunia, Ricardo Izecson Dos Santos Leite atau Ricardo Kaka, datang ke Indonesia sebagai dua global Oppo. Kehadiran bintang AC Milan itu adalah untuk kemitraan Oppo dengan Liga Champion UEFA 2023.Diboyong brand Oppo, Ricardo Kaka atau Kaka meluangkan waktu di Tanah Air untuk bertemu dengan para pengguna Oppo Find N2 Flip, smartphone layar lipat Oppo yang iklannya dibintangi oleh Kaka.Dalam rangka kunjungannya sebagai duta global Oppo, Ricardo Kaka yang tiba di Jakarta pada 2 Juni 2023 langsung menjalani berbagai agenda.Salah satunya adalah Meet and Greet eksklusif bagi pengguna Oppo Find N2 Flip di Oppo Gallery, Plaza Indonesia.Pada kesempatan itu, Kaka berbagi pengalaman dan cerita mengenai karier sepak bolanya, terutama di Liga Champions UEFA. Tak lupa, pria 41 tahun ini juga memberikan tanda tangan dan foto bersama para penggemar yang hadir.Momen unik dibagikan oleh akun Instagram Oppo Indonesia @oppoindonesia, yakni saat Raffi Ahmad sekeluarga turut hadir dalam momen Meet and Greet di Oppo Gallery, Plaza Indonesia.Dalam kesempatan itu, Oppo juga membagikan momen saat Ricardo Kaka menandatangani sebuah bola untuk diberikan kepada putra pertama Raffi Ahmad dan Nagita Slavina, Rafathar.Selanjutnya, Ricardo Kaka berfoto dengan dua anak Raffi Ahmad dan Nagita Slavina, yakni Rafathar dan Rayyanza atau yang karib disapa Cipung. Dalam foto itu, Kaka tampak menunduk agar Rafathar dan Rayyanza bisa terlihat jelas di foto.Uniknya, dalam sebuah foto yang dibagikan di akun Instagram Oppo, Kaka terlihat sedang melihat ke arah Rayyanza yang memegang bola berwarna merah.Mata Rayyanza yang biasa disapa Cipung pun terlihat melirik ke arah samping dalam foto tersebut, membuatnya keliatan menggemaskan.Setelah sesi foto dengan kedua putra Raffi Ahmad dan Nagita Slavina, keluarga yang baru saja menyambut member NCT di rumahnya ini pun berfoto bersama dengan Kaka dalam pose yang terlihat begitu akrab.Siapa sangka, foto Kaka bersama Rafathar dan Rayyanza pun viral di media sosial. Akun Twitter menfess @tanyakanrl mengunggah foto Kaka bersama Rafathar dan Rayyanza tersebut ke base."Setelah ketemu boyband Korea, lihatlah guys, Cipung gemas lagi sama Kaka di acara Oppo," katanya. Warganet pun gemas dan salah fokus dengan lirikan mata Cipung."Ngeledek side eye," kicau seorang warganet @seu***, melampirkan close-up wajah Cipung dengan lirikan matanya.Warganet lain mengunggah cuitan kocak lainnya berkaitan dengan lirikan mata Cipung. Seolah menjadi Cipung, warganet @cha*** mencuit, "Cipung: Irikan lo sama gue, bisa ga loe..."Warganet lain juga fokus ke lirikan mata Cipung. "Dek Cipung napa lirikannya kayak ngeledek banget. Sepertinya tidak heran kalau Messi nanti silaturahmi ke Andara. Kalau iya, fix djj bakal lebih amaze sih orang pas tahu ronaldinho sama michael owen ke andara aja udah terkejut, auto telpon father dan mother buat balik ke andara," kicau @byn***.Pengguna Twitter lain juga salah fokus ke wajah Cipung. "Bombastic side eye pung," kicau @buc***."Cipung ini muka ngeledeknya emang mantep wkwkwkwk," kata @aas***.Warganet lain ikut salfok dengan Cipung yang masih kecil tetapi sudah bertemu dengan banyak tokoh publik dunia."Cipung be like: Gue umur setahun udah ketemu banyak orang-orang hebat, mau ape luuu," kicau @aki***."Cipung masih kecil tp CV-nya udah penuh kayaknya," kata @whi***."Cipung masi kecil tapi relasinya udah luas," kata @ind***.Warganet lain mengunggah komentar kocak. "Bingung mau jadi Cipung apa kaka," kata @dom***.',
              });
            }}
          />
          <Card
            img={IBerita10}
            label="Mobil China kian jadi primadona di Tanah Air"
            tgl="Wednesday, 1 February 2023"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita10,
                titleDetail: 'Mobil China kian jadi primadona di Tanah Air',
                textDetail1: 'PR Wire',
                textDetail2:
                  'Jakarta (ANTARA) — Pabrikan mobil China saat ini sedang meningkatkan pangsa pasarnya di berbagai negara, termasuk Indonesia. Mereka menawarkan mobil China di Indonesia dengan harga kompetitif dan kualitas baik yang menarik bagi konsumen.Beberapa merek mobil China di Indonesia adalah Wuling, Geely, Changan, dan Great Wall. Merek-merek ini telah berhasil menjadi pilihan utama bagi konsumen dengan harga yang kompetitif, desain menarik, dan fitur yang canggih.Menyambut Imlek tahun ini mau beli mobil baru? Buat mengetahuinya, DuitPintar.com, website edukatif dan informatif seputar asuransi milik Anugrah Atma Adiguna yang telah terdaftar di Otoritas Jasa Keuangan (OJK) merangkum rekomendasi mobil China di Indonesia yang paling populer.Berikut ini adalah daftar mobil China di Indonesia dengan kelebihan dan kekurangannya:1.	Wuling Wuling Motors adalah salah satu pabrikan mobil asal China yang memproduksi mobil MPV dan LCV. Merek ini dikenal di Indonesia karena harga yang kompetitif dan kualitas yang baik.Wuling sendiri merupakan joint venture antara SAIC Motor, General Motors, dan Liuzhou Wuling Automobile Industry. Wuling Motors memproduksi beberapa model mobil yang populer di Indonesia, diantaranya:●Wuling Confero: mobil MPV 7-seater yang ditawarkan dengan harga yang kompetitif dan dilengkapi dengan fitur canggih seperti kamera mundur, fitur keamanan, dll.●Wuling Cortez: mobil MPV dengan desain elegan dan fitur canggih seperti sistem infotainment, kamera mundur, dll.●Wuling Formo: mobil LCV yang ditawarkan dengan harga yang kompetitif dan dilengkapi dengan fitur canggih seperti sistem infotainment, fitur keamanan, dll. 2. Cherry Chery Automobile Co., Ltd. adalah salah satu pabrikan mobil asal China yang menawarkan berbagai jenis mobil seperti sedan, hatchback, SUV, dan MPV. Merek ini dikenal di Indonesia karena harga yang kompetitif dan kualitas yang baik. Beberapa model mobil yang ditawarkan oleh Cherry di Indonesia antara lain:●Cherry QQ: mobil hatchback yang ditawarkan dengan harga yang kompetitif dan dilengkapi dengan fitur canggih seperti sistem infotainment, kamera mundur, dll.●Cherry Tiggo : mobil SUV yang ditawarkan dengan desain yang elegan dan fitur canggih seperti sistem infotainment, kamera mundur, dll. ●Cherry sedan : mobil sedan yang ditawarkan dengan harga yang kompetitif dan dilengkapi dengan fitur canggih seperti sistem infotainment, kamera mundur, dll.3. GeelyGeely Automobile Holdings Limited adalah salah satu pabrikan mobil asal China yang menawarkan berbagai jenis mobil seperti sedan, hatchback, SUV, dan MPV dengan desain yang elegan dan fitur canggih. Merek ini dikenal di Indonesia karena harga yang kompetitif dan kualitas yang baik.Beberapa model mobil yang ditawarkan oleh Geely di Indonesia antara lain:●Geely Coolray: mobil SUV yang ditawarkan dengan desain yang elegan dan fitur canggih seperti sistem infotainment, kamera mundur, dll.●Geely Boyue: mobil SUV yang ditawarkan dengan desain yang elegan dan fitur canggih seperti sistem infotainment, kamera mundur, dll.●Geely Emgrand: mobil sedan yang ditawarkan dengan harga yang kompetitif dan dilengkapi dengan fitur canggih seperti sistem infotainment, kamera mundur, dll.4. DFSK DFSK (Dongfeng Sokon) adalah salah satu pabrikan mobil asal China yang menawarkan mobil LCV dan SUV dengan harga yang kompetitif. Merek ini dikenal di Indonesia karena harga yang kompetitif dan kualitas yang baik. DFSK sendiri merupakan joint venture antara Dongfeng Motor Corporation dan Sokon Industry Group.Beberapa model mobil yang ditawarkan oleh DFSK di Indonesia antara lain:●DFSK Glory 580: mobil SUV yang ditawarkan dengan desain yang elegan dan fitur canggih seperti sistem infotainment, kamera mundur, dll.●DFSK V27: mobil MPV yang ditawarkan dengan harga yang kompetitif dan dilengkapi dengan fitur canggih seperti sistem infotainment, kamera mundur, dll.●DFSK C37: mobil LCV yang ditawarkan dengan harga yang kompetitif dan dilengkapi dengan fitur canggih seperti sistem infotainment, kamera mundur, dll.Itulah daftar mobil China di Indonesia dengan seluruh kelebihan dan kekurangannya yang bisa menjadi salah satu kendaraan pilihan. Setelah memilih salah satu merek di atas, jangan lupa melengkapi kendaraan Anda dengan asuransi mobil, salah satunya asuransi mobil All Risk .Seperti diketahui, asuransi mobil akan melindungi finansial dari biaya servis mobil yang mahal. Anda tidak perlu khawatir lagi karena pihak asuransi akan menanggung biaya perbaikan mobil kesayanganmu hingga 100%.Dapatkan refrensi info tentang asuransi mobil dan produk proteksi lainnya sesuai kebutuhan dan kemampuan finansial Anda di DuitPintar.com.  Selain bisa membandingkan polis-polis asuransi terbaik di Indonesia sekaligus melakukan registrasi secara online, proses registrasi, pemilihan polis yang sesuai budget, hingga melakukan klaim, akan dibantu pialang asuransi Anugrah Atma Adiguna (Triple A).',
              });
            }}
          />
          <Card
            img={IBerita11}
            label="Mengenal Lapisan Matahari dan Manfaatnya"
            tgl="Thursday, 9 March 2023"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita11,
                titleDetail: 'Mengenal Lapisan Matahari dan Manfaatnya',
                textDetail1: 'Annisa Ambarwaty',
                textDetail2:
                  'Jakarta: Matahari adalah pusat tata surya yang merupakan poros dari planet-planet yang mengelilinginya. Matahari merupakan satu-satunya sumber cahaya alami yang menerangi bumi yang ternyata juga merupakan bintang terbesar dan terdekat dengan bumi. Jaraknya 150 juta kilometer.Matahari berbentuk bola gas bercahaya yang sangat besar. Alasan matahari bisa bersinar karena reaksi fusi di inti matahari, di mana matahari terdiri dari gas hidrogen yang bereaksi satu sama lain untuk melepaskan energi cahaya dan panas.Matahari memiliki suhu rata-rata 5.500ºC. Namun, setiap lapisan matahari memiliki suhu yang berbeda-beda. Empat lapisan matahari berurutan dari lapisan terdalam adalah inti matahari, fotosfer, kromosfer, dan korona. Dikutip dari laman Ruangguru berikut penjelasannya:Lapisan Inti MatahariLapisan inti matahari merupakan lapisan paling dalam matahari. Lapisan ini memiliki suhu 15 juta ºC dan menjadi pusat reaksi matahari yang menghasilkan energi yang sangat besar.FotosferFotosfer adalah bagian permukaan matahari atau lapisan yang melapisi bagian inti matahari. Lapisan fotosfer memiliki suhu 6.000 ºC dengan ketebalan sekitar 350 km. Lapisan fotosfer inilah yang memancarkan cahaya yang paling kuat, maka dari itu disebut juga sebagai lapisan cahaya. Kromosfer Lapisan berikutnya adalah kromosfer. Lapisan kromosfer adalah atmosfer matahari atau lapisan gas bagian luar yang menyelimuti matahari. Lapisan kromosfer mengandung partikel-partikel, seperti proton, elektron, dan neutron yang memiliki suhu 6.000 - 20.000 ºC. Lapisan ini lebih tebal dibandingkan dengan fotosfer, yakni dengan ketebalan 2.000 km.KoronaKorona adalah lapisan paling luar matahari atau atmosfer matahari bagian luar. Korona merupakan lapisan berupa gas, meskipun gas yang dimiliki sangat tipis dan sering berubah-ubah. Lapisan ini memiliki suhu lebih tinggi dari lapisan kromosfer, yakni 1 juta ºC. Lapisan korona juga merupakan lapisan paling tebal di antara lapisan lainnya, yaitu dengan ketebalan sekitar 700.000 km. Matahari memiliki diameter 1,4 juta km, yaitu sekitar 109 kali diameter Bumi. Dengan ukuran sebesar itu, matahari juga memiliki tarikan gravitasi paling besar. Kehangatan yang dipancarkan matahari memiliki beragam fungsi untuk kehidupan makhluk di sistem tata surya, termasuk makhluk bumi. Fungsi sinar matahari bagi manusia antara lain:Membantu proses pengeringanManusia seringkali menggunakan sinar matahari untuk proses pengeringan bahan makanan maupun pakaian. Contoh bahan makanan yang memanfaatkan sinar matahari dalam proses pengeringannya, adalah padi, biji-bijian, ikan, dan hewan laut lainnya.Membantu pelaksanaan fotosintesis pada tumbuhanFotosintesis adalah kegiatan vegetatif tumbuhan. Selain itu, fotosintesis juga bermanfaat bagi manusia dan makhluk hidup lainnya karena menghasilkan oksigen yang dibutuhkan untuk bernapas. Tanpa adanya sinar matahari, proses fotosintesis tidak akan terjadi, dan oksigen tidak akan diproduksi. Pembangkit Listrik Tenaga Surya (PLTS)Listrik sangat penting bagi keberlangsungan kegiatan manusia. Sinar matahari dan tenaganya yang besar dapat digunakan sebagai sumber listrik melalui Pembangkit Listrik Tenaga Surya (PLTS). Memiliki Vitamin D yang menyehatkan badanSeringkali anak-anak dijemur di bawah sinar matahari pagi. Tak jarang pula ditemui imbauan bagi pasien covid-19 untuk berjemur di bawah sinar matahari. Ini karena sinar matahari pagi mengandung Vitamin D yang bagus bagi kesehatan tulang dan gigi serta baik untuk kesehatan tubuh.Itulah penjelasan tentang lapisan-lapisan matahari dan manfaat dari sinar matahari bagi kehidupan di tata surya, terutama kehidupan makhluk di bumi. Semoga bermanfaat dalam memperkaya wawasan sobat Medcom tentang bintang terbesar di tata surya ini ya. ',
              });
            }}
          />
          <Card
            img={IBerita12}
            label="Kenapa Air Laut Bisa Pasang Surut? Ketahui Proses, Jenis, dan Manfaatnya"
            tgl="Friday, 14 April 2023"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita12,
                titleDetail:
                  'Kenapa Air Laut Bisa Pasang Surut? Ketahui Proses, Jenis, dan Manfaatnya',
                textDetail1: 'Nurisma Rahmatika',
                textDetail2:
                  'Jakarta: Pasang surut merupakan fenomena alam yang menunjukkan pergerakan permukaan air laut secara berkala. Pasang terjadi ketika air bergerak sampai batas terjauh garis pantai, sedangkan surut terjadi saat air bergerak menjauhi garis pantai.Peristiwa ini disebabkan oleh kombinasi gaya gravitasi dan gaya tarik menarik antara laut, matahari, dan bulan. Namun, pasang naik dan surut air laut yang ada di bumi mayoritas dipengaruhi oleh gravitasi bulan.Lantas, bagaimana proses terjadinya pasang surut air laut? Untuk mengupasnya lebih lanjut, simak pembahasan mengenai proses, jenis, dan manfaat pasang surut air laut yang dikutip dari Zenius:Proses terjadinya pasang surut air laut Pasang surut air laut terjadi karena beberapa faktor, utamanya adalah gaya gravitasi bulan terhadap bumi dan rotasi bumi. Ketika sisi bumi yang paling dekat dengan bulan mengalami tarikan gravitasi bulan yang paling kuat, maka akan menyebabkan air laut naik. Di sisi bumi lain yang jauh dari bulan, gaya rotasi bumi akan lebih kuat dibandingkan dengan tarikan gravitasi bulan. Gaya rotasi bumi ini menyebabkan air menumpuk, sehingga terjadilah fenomena pasang air laut.Sementara itu, proses surut air laut terjadi pada belahan bumi lain yang gaya gravitasi bulannya kecil. Misalnya, pada saat tidak mengalami bulan purnama atau bulan baru.Ketika gaya gravitasi bulan menarik air laut di salah satu belahan bumi, itu juga akan menarik jatah air dari belahan bumi lain, sehingga terjadi pasang. Di sisi lain, air di belahan bumi yang diambil jatah airnya akan menjadi surut.Jenis pasang surut air laut Pasang surut air laut disebabkan oleh gaya gravitasi matahari, bulan, dan rotasi bumi. Itulah sebabnya, pasang surut air laut bisa dibedakan menjadi dua jenis berdasarkan posisi matahari, bulan, dan bumi. Kedua jenis tersebut ialah pasang purnama dan pasang perbani. Selain itu, berdasarkan frekuensinya, pasang surut juga dibedakan menjadi diurnal, semidiurnal, dan campuran. Berikut masing-masing penjelasannya:Pasang Purnama Spring tides atau pasang purnama terjadi pada waktu bulan memasuki fase bulan purnama dan bulan baru. Fenomena ini terjadi ketika matahari, bumi, dan bulan terletak sejajar atau membentuk sudut 180 derajat.Fenomena spring tides ditandai dengan terjadinya pasang naik yang sangat tinggi, namun akan sangat rendah ketika surut. Hal ini dikarenakan posisi antara matahari, bumi, dan bulan yang sejajar membuat gaya tarik menariknya tinggi.Analoginya, kalau belahan bumi A menarik, maka akan ada belahan bumi lainnya yang tertarik. Karena tarikannya besar, maka pasang dan surutnya juga besar.Pasang Perban Neap tides atau pasang perbani terjadi saat bulan berada pada fase paruh akhir dan paruh awal. Pasang ini terjadi ketika posisi matahari, bumi, dan bulan berada saling tegak lurus membentuk sudut 90 derajat. Pada fenomena ini, ketika air laut sedang pasang, permukaannya tak begitu naik. Begitu pun ketika sedang surut, permukaan air laut tidak terlalu rendah.Pasang Surut Diurnal, Semidurnal, dan CampuranPerbedaan utama antara pasang surut diurnal dan semidiurnal terletak pada periode gelombangnya. Interval antara pasang naik dan surut terjadi sekitar 12 jam 25 menit.Pasang surut diurnal terjadi sebanyak satu kali pasang naik dan satu kali pasang surut dalam 24 jam. Sedangkan, pasang surut semidiurnal memiliki periode dua kali pasang naik dan dua kali pasang surut dalam 24 jam.Selain itu, ada pula pasang campuran yang menggambarkan kedua jenis tersebut. Pasang surut campuran terjadi sebanyak dua kali pasang dan dua kali surut dalam 24 jam dengan ketinggian pasang surut yang berbeda-beda.Manfaat Pasang Surut Air LautFenomena pasang surut air laut utamanya dimanfaatkan oleh nelayan untuk menentukan perkiraan waktu berlayar dan menangkap ikan. Selain itu, petani tambak garam juga bisa mengambil keuntungan dari fenomena ini. Petani garam bakal memperkirakan waktu terjadinya pasang air laut. Ketika fenomena itu terjadi, mereka akan mengambil air laut sebanyak-banyaknya untuk dijadikan garam.Tak cuma itu, Pembangkit Listrik Tenaga Air (PLTA) juga memanfaatkan pasang surut air laut untuk menggerakkan generator pembangkit listrik. Dengan begitu, listrik bisa dihasilkan dan dialirkan ke rumah-rumah. Demikianlah pembahasan mengenai fenomena pasang surut air laut, mulai dari proses, jenis, hingga manfaatnya bagi kehidupan. Semoga bermanfaat! ',
              });
            }}
          />
          <Card
            img={IBerita13}
            label="Kiat Ampuh Cegah Gagal Bayar Tagihan Paylater, Cekidot!"
            tgl="Saturday, 20 May 2023"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita13,
                titleDetail:
                  'Kiat Ampuh Cegah Gagal Bayar Tagihan Paylater, Cekidot!',
                textDetail1: 'Husen Miftahudin',
                textDetail2:
                  'Jakarta: Tren pembayaran dari waktu ke waktu terus berkembang. Terbaru, tren beli sekarang, bayar nantiatau dikenal dengan paylater kini naik daun khususnya bagi masyarakat yang gemar berbelanja daring.Meski begitu, kemudahan berbelanja melalui paylater ini terkadang tidak dibarengi dengan pemahaman dan sikap bijak para penggunanya dalam memanfaatkan metode pembayaran tersebut.Tidak sedikit masyarakat yang mengalami tagihan membengkak karena lewat jatuh tempo dan membuat kantong jebol para pengguna.Berkaca dari hal itu, berikut beberapa kiat yang bisa dilakukan masyarakat agar dapat mencegah galbay alias gagal bayar tagihan paylater dan melunasinya tepat waktu.1. Pastikan produk paylater yang digunakan memberi informasi yang transparan termasuk di dalamnya informasi terkait penghitungan bunga dan nominal cicilan. 2. Masyarakat harus bisa membatasi penggunaan paylater sesuai dengan kemampuan membayar.3. Jika menggunakan cicilan sebagai metode pembayaran tagihan, pilih periode pembayaran yang sesuai dengan cash flow keuangan.4. Pelajari syarat dan ketentuan yang berlaku agar Kamu lebih memahami dengan baik metode pembayaran paylater.5. Secara berkala, periksa periode pembayaran dan tanggal jatuh tempo dari jasa paylater yang digunakan. Hal itu bisa memberikan kepastian agar Kamu tidak lupa dan terlambat membayar tagihan.6. Pastikan hanya menggunakan limit paylater untuk transaksi pribadi. Jangan meminjamkan layanan paylater yang dimiliki pribadi ke orang lain, karena apabila mereka tidak membayar, tentu Kamu juga yang kerepotan. SPayLater ShopeeDalam hal ini, Shopee memberikan solusi paylater, yaitu SPayLater. Terdapat beberapa opsi periode cicilan, mulai dari satu kali, enam kali, 12 kali, bahkan 24 kali. SPayLater pun laiknya layanan keuangan yang lain ini, terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK). Tidak hanya menyiapkan diri sendiri untuk membayar tagihan, persiapan dan langkah ekstra juga harus disiapkan mengingat kejahatan siber tengah marak.Apabila ternyata ada aktivitas janggal terjadi di akun paylater, misalnya ada yang mencoba masuk ke akun paylater atau ternyata Kamu kehilangan ponsel. Berikut beberapa tahapan yang perlu dilakukan khususnya bagi pengguna SPaylater:1. Jika menerima peringatan tentang upaya masuk ke akun yang mencurigakan, maka Kamu perlu menghubungi SPayLater Customer Service, karena ini adalah percobaan pengambilan akun SPayLater kamu oleh pelaku kejahatan.2. Jangan panik dan tetap tenang karena untuk memastikan keamanan akun, Shopee akan mengirimkan notifikasi dalam aplikasi yang memberitahu pengguna tentang semua aktivitas masuk dari akun Shopee yang berasal dari perangkat atau lokasi yang tidak dikenal.3. Dalam kasus kehilangan gadget yang tersambung ke aplikasi Shopee, maka Kamu juga bisa segera laporkan ke Customer Service Shopee agar akun Kamu bisa diamankan dan tidak disalahgunakan.',
              });
            }}
          />
          <Card
            img={IBerita21}
            label="Pemerintah Beri Bonus Peraih Medali Sea Games 2023, Totalnya Rp289 Miliar"
            tgl="Sunday, 25 June 2023"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita21,
                titleDetail:
                  'Pemerintah Beri Bonus Peraih Medali Sea Games 2023, Totalnya Rp289 Miliar',
                textDetail1: 'Kautsar Widya Prabowo',
                textDetail2:
                  'Pemerintah Beri Bonus Peraih Medali Sea Games 2023, Totalnya Rp289 Miliar - Medcom.idJakarta: Presiden Joko Widodo (Jokowi) menerima ratusan atlet Indonesia yang telah berlaga dalam Sea Games 2023, di Halaman Istana Negara, Jakarta Pusat. Presiden menyerahkan bonus terhadap atlet yang mendapatkan medali."Kita itung-itung total (bonus) Rp289 miliar untuk atlet, pelatih, asisten pelatih semua diberikan," ujar Presiden Jokowi dalam sambutannya.Jokowi mengaku sempat kaget melihat besarnya anggaran untuk bonus tersebut. Sebab, perolehan medali di atas target yang telah ia tentukan."Kita ingat saat pemberangkatan saya bertanya ke Menpora target medali emas berapa? beliau menyampaikan pak minimal 60. Saya bilang saya gamau 60 minimal 69. Dan (Sea Games) sekarang di Kamboja dapatnya 87 medali emas 80 medali perak dan 109 perunggu," jelasnya. Namun, Kepala Negara menegaskan masyarakat senang dan bangga atas pencapain atlet Indonesia. Jokowi menyampaikan apresiasi kepada atlet yang telah mengharumkan nama Indonesia. "Atas nama rakyat bangsa negara ucapkan terimakasih apresiasi sebesar-sebesar atas perjuangan baik peraih medali yang telah bekerja keras," bebernya.Berikut rincian besaran bonus untuk atlet Indonesia di Sea Games 2023:AtletMedali emas1.	Perorangan Rp525 juta2.	Ganda/Pasangan Rp420 juta3.	Beregu Rp367,5 jutaMedali Perak1.	Perorangan Rp315 juta2.	Ganda/Pasangan Rp252 juta3.	Beregu Rp220,5 jutaMedali Perunggu1.	Perorangan 157.500.0002.	Ganda/Pasangan Rp126 juta3.	Beregu Rp105,5 jutaPelatih Perorangan/ganda1.	Emas: Rp210 juta2.	Perak: Rp126 juta3.	Perunggu: Rp63 jutaBereguEmas: Rp315 jutaPerak: Rp189 jutaPerunggu: Rp94,5jutaMedali kedua dan selanjutnya1.	Emas: Rp105 juta2.	Perak: Rp63 juta3.	Perunggu: Rp31,5 jutaAsisten Pelatih1.	Emas perorangan/ganda Rp105 juta2.	Perak Rp63 juta3.	Perunggu Rp31,5 jutaBeregu1.	Emas Rp157 juta2.	Perak Rp94,5 juta3.	Perunggu Rp47,25 juta Medali kedua dan seterusnya Emas Rp52,5 juta perak Rp31,5 jutaperunggu Rp15,75 jutaTotal: Rp289.014.579.979',
              });
            }}
          />
          <Card
            img={IBerita14}
            label="Ini Berbagai Tantangan Kembangkan Ekosistem Kendaraan Listrik"
            tgl="Monday, 31 July 2023"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita14,
                titleDetail:
                  'Ini Berbagai Tantangan Kembangkan Ekosistem Kendaraan Listrik',
                textDetail1: 'Annisa ayu artantiAnnisa ayu artanti',
                textDetail2:
                  'Jakarta: Pembentukan ekosistem kendaraan listrik dinilai dapat meringankan beban subsidi Bahan Bakar Minyak (BBM) di Indonesia. Terlebih saat ini harga energi tengah naik akibat faktor geopolitik global."Ketegangan geopolitik memengaruhi harga BBM dunia. Adopsi EV dapat mendukung upaya memperkuat ketahanan energi Indonesia," jelas Associate dan Country Coordinator IISD Lucky Lontoh, dilansir dari laman Kemenkomarves, Senin, 5 Juni 2023.Namun, ia tak menampik kondisi pengembangan industri EV dalam negeri masih dihadapkan dengan dua tantangan besar.Ia pun menyebutkan tantangan pertama adalah bagaimana cara agar  Indonesia dapat meningkatkan kapasitas manufaktur. Lalu kedua adalah bagaimana agar Indonesia dapat meningkatkan permintaan domestik terhadap EV. Sementara itu, Managing Director dan Senior Partner BCG Yulius menambahkan, saat ini sudah banyak negara maju dan berkembang yang telah memberikan kebijakan insentif terkait kendaraan listrik dengan harapan bisa menjadi produser kendaraan listrik di negaranya. "Pertanyaannya, Indonesia apakah kita menjadi konsumen saja atau kita juga ada ambisi untuk jadi hub production dari kendaraan listrik? Saya mengapresiasi pemerintah Indonesia yang sudah memiliki keinginan untuk menjadi produsen ataupun hub dari basis produksinya,” ujar Yulius. Namun ia juga mengingatkan, tak hanya Indonesia tetapi seluruh industri otomotif dunia saat ini sedang mengalami transformasi generational opportunity yang datang sekali dalam waktu tiga puluh tahun karena produsen mobil sedang melakukan pergantian radikal jenis bahan bakar otomotif."Banyak negara berlomba-lomba untuk mengundang OEM (Original Equipment Manufacturer) untuk membangun industri di negara mereka, karena kalau tidak dipilih sebagai yang pertama, mungkin akan menunggu 5-10 tahun ke depan,” imbuh Yulius.',
              });
            }}
          />
          <Card
            img={IBerita17}
            label="Ratusan Hewan Ternak di Surabaya Diberi Vaksin LSD Jelang Iduladha"
            tgl="Wednesday, 11 October 2023"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita17,
                titleDetail:
                  'Ratusan Hewan Ternak di Surabaya Diberi Vaksin LSD Jelang Iduladha',
                textDetail1: 'Amaluddin ',
                textDetail2:
                  'Surabaya: Dinas Ketahanan Pangan dan Pertanian (DKPP) Kota Surabaya, Jawa Timur, akan menyuntikkan 200 dosis vaksin kepada hewan ternak pekan depan. Langkah ini dilakukan untuk mengantisipasi penyebaran penyakit lumpy skin desease (LSD) menjelang Iduladha."Dari 200 dosis, 140 dosis akan disuntikkan ke hewan ternak mulai minggu depan," kata Kepala DKPP Kota Surabaya, Antiek Sugiharti, Senin, 5 Juni 2023.Antiek mengatakan, setiap hewan akan mendapat satu dosis. Penyuntikan vaksin itu akan dilakukan di kandang hewa se-Surabaya. "Satu dosis untuk satu hewan. Nantinya semua hewan ternak di Surabaya akan disuntik vaksin LSD," ujarnya.Antiek menegaskan bahwa khusus hewan kurban tidak akan disuntik vaksin LSD. Karena dikhawatirkan membahayakan manusia, jika mengonsumsi daging hewan yang divaksin LSD."Jadi, vaksin LSD ini hanya untuk hewan ternak, bukan untuk hewan kurban. Karena kalau divaksin LSD, terus dipakai kurban justru ditakutkan ada residunya yang bahaya untuk manusia kalau dimakan," katanya.Sementara untuk memastikan hewan kurban tetap sehat dan aman dari virus LSD, lanjut Antiek, pihaknya akan memantau hewan yang masuk surabaya. Misalnya mengecek surat kesehatan hewan. "Hewan kurban seperti sapi atau kambing yang terindikasi LSD akan segera dikarantina, dipisahkan untuk mencegah penyebaran penyakit ke sapi lain yang masih sehat," ujarnya.',
              });
            }}
          />
          <Card
            img={IBerita18}
            label="Angka Kejahatan di Kota Bandung Diklaim Turun"
            tgl="Thursday, 16 November 2023"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita18,
                titleDetail: 'Angka Kejahatan di Kota Bandung Diklaim Turun',
                textDetail1: 'P Aditya Prakasa',
                textDetail2:
                  'Bandung: Angka kejahatan di Kota Bandung diklaim menurun hingga 40 persen. Penurunan kasus disebut imbas razia rutin jajaran Polrestabes Bandung dan seluruh Polsek di Kota Bandung di lokasi-lokasi rawan terjadi kejahatan.Kapolrestabes Bandung, Kombes Budi Sartono, mengatakan, razia rutin guna memberikan rasa aman dan nyaman bagi masyarakat. Kegiatan tersebut bakal terus dilakukan oleh jajaran Polrestabes Bandung."Kegiatan ini akan kita lakukan secara masif dan berkelanjutan, agar dapat memberikan rasa aman kepada seluruh masyarakat Kota Bandung baik di siang juga malam hari," ucap Budi di Mapolrestabes Bandung, Senin, 5 Juni 2023. Budi mengatakan akan terus berupaya mencegah terjadinya aksi kejahatan seperti begal dan aksi kelompok bermotor yang sempat menjadi viral di media sosial. "Polrestabes Bandung tidak pernah berhenti memberantas pelaku kejahatan yang berulah di Kota Bandung. Kita babat tuntas sampai bersih," kata dia. Selama satu minggu terakhir, kata dia, puluhan pemuda yang teridentifikasi sebagai anggota geng motor telah ditangkap dengan puluhan senjata tajam serta miras diamankan. Polisi memastikan tak menoleransi pelaku kejahatan di Kota Bandung. Di samping itu, lanjut dia, Polrestabes Bandung juga telah membangun Command Center untuk menerima laporan dan aduan dari masyarakat. Anggota kepolisian kemudian akan langsung bergerak untuk menangani laporan dari masyarakat tersebut.  "Kami juga telah membangun Command Center yang akan membantu mengendalikan anggota di lapangan dan menerima laporan masyarakat. Kami harapkan kepada masyarakat agar tidak ragu melaporkan kepada kita apabila melihat kejahatan yang terjadi. Bagi pelaku kejahatan yang masih mencoba bermain di Bandung akan kami berikan contoh secara tegas dan terukur," ucap dia.  ',
              });
            }}
          />
          <Card
            img={IBerita16}
            label="Puluhan Warga Mataram Keracunan Nasi Bungkus"
            tgl="Friday, 22 December 2023"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita16,
                titleDetail: 'Puluhan Warga Mataram Keracunan Nasi Bungkus',
                textDetail1: 'Antara',
                textDetail2:
                  'Mataram: Kepolisian Resor Kota Mataram, Nusa Tenggara Barat, menyelidiki penyebab puluhan warga di Desa Lebah Sempage, Kecamatan Narmada, Kabupaten Lombok Barat, diduga mengalami keracunan usai makan nasi bungkus."Sekarang kami masih melakukan penyelidikan dari laporan polisi yang kami terima dari penanganan awal di Polsek Narmada. Siang ini baru kami terima," kata Kepala Satreskrim Polresta Mataram Kompol I Made Yogi Purusa Utama di Mataram, Senin, 5 Juni 2023.Dalam rangkaian penyelidikan untuk mengungkap adanya unsur pidana pada peristiwa yang terjadi, Minggu, 4 Juni 2023, dalam kegiatan penyuluhan dari Himpunan Mahasiswa Farmasi Universitas Qhamarul Huda Bagu (Uniqhba), dia memastikan akan ada permintaan klarifikasi kepada para pihak."Bukan hanya korban yang mengalami nyeri ulu hati, muntah, mulas dan lemas saja, nanti juga ada dari keterangan dokter dan Balai POM juga, karena mereka yang ahli, yang bisa jabarkan apa benar ada racun di makanan ini," ujarnya.Oleh karena itu, Yogi pun memastikan bahwa pihaknya juga mempelajari informasi hasil temuan awal dari Polsek Narmada."Ya, termasuk makanan nasi bungkus, mi, dan tempe yang diduga menjadi penyebab para korban dilarikan ke rumah sakit. Itu semua nanti akan kami uji di laboratorium Balai POM," ucap dia. Yogi meyakinkan bahwa dalam penanganan kasus ini pihaknya belum mengamankan maupun menetapkan tersangka. "Masih lidik. Nanti kalau sudah ada hasil dari ahli, uji laboratorium, apakah ada unsur kesengajaan atau tidak, itu akan dilihat dalam penyelidikan ini," jelasnya.',
              });
            }}
          />
          <Card
            img={IBerita19}
            label="99% Komponen Mobil Bisa Didaur Ulang Toyota"
            tgl="Saturday, 27 January 2024"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita20,
                titleDetail: '99% Komponen Mobil Bisa Didaur Ulang Toyota',
                textDetail1: 'Ekawan Raharja',
                textDetail2:
                  'Tokyo: Sistem sirkular atau daur ulang kini menjadi salah satu aspek yang semakin diperhatikan perusahaan otomotif untuk mencapai netralitas karbon. Toyota semakin mengintensifkan sistem daur ulangnya dan mengklaim 99 persen komponen yang ada di mobil mereka bisa didaur ulang.Melalui Toyota Metal, sebuah perusahaan daur ulang yang sudah berdiri sejak tahun 1970, berencana untuk mendirikan 30 titik fasilitas untuk merawat dan mendaur ulang kendaraan bekas pada tahun 2030. Kegiatan menjadi bagian untuk mempromosikan sistem berbasis daur ulang di seluruh dunia. Proses daur ulang yang mereka lakukan melalui serangkaian langkah. Pertama, semua cairan disaring. Kemudian, bagian yang dapat digunakan seperti bumper dan pintu dilepas menggunakan alat berat. Logam yang tersisa diratakan dan dibawa ke perusahaan daur ulang. Logam non-ferro seperti aluminium, tembaga, emas, dan perak dihilangkan. Aluminium 100 persen dapat didaur ulang. Campuran logam baru dihaluskan untuk menghilangkan logam berlebih, dan menyelesaikan proses daur ulang.  Teknologi canggih dan perawatan yang perusahaan miliki memastikan mobil diberikan kehidupan baru. Selain mobil, merek asal Jepang ini juga mendaur ulang airbag, AC, mesin cuci, sepeda motor, perahu, dan limbah industri. Bahkan pada tahun 2019, pihak Toyota Amerika Utara sudah melakukan daur ulang baterai. Mereka memperbaiki dan membongkar baterai untuk digunakan kembali komponennya untuk membuat yang baru. “Ini adalah peluang matang untuk banyak greenwashing oleh perusahaan otomotif,” kata Profesor Ekonomi East Tennessee State University, Richard Gregory, dikutip dari laman NYTimes.',
              });
            }}
          />
          <Card
            img={IBerita20}
            label="Selain Kecelakaan, Ini Faktor yang Bikin Kaca Mobil Retak"
            tgl="Sunday, 4 March 2024"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita20,
                titleDetail:
                  'Selain Kecelakaan, Ini Faktor yang Bikin Kaca Mobil Retak',
                textDetail1: 'Ekawan Raharja',
                textDetail2:
                  'Jakarta: Kaca mobil yang retak tentu akan menjadi tantangan saat mengemudi. Keretakan ini ternyata tidak hanya disebabkan oleh benturan/kecelakaan saja, namun ada juga faktor-faktor lain sebagai penyebabnya. Situs resmi Suzuki menjelaskan ada beberapa faktor yang bisa menyebabkan retakan pada kaca mobil, diantaranya:1. Benturan Fisik dengan Benda yang KerasSalah satu penyebab paling umum dari retakan kaca mobil adalah benturan fisik dengan benda keras. Ini bisa terjadi dalam berbagai situasi, misalnya saat mobil diparkir di bawah pohon dan terkena jatuhnya benda keras seperti ranting atau buah kering.Benturan fisik ini bisa merusak struktur kaca dan menyebabkan retakan. Oleh karena itu, penting untuk selalu berhati-hati saat memarkir mobil dan menghindari area yang berpotensi menimpa kaca mobil. 2. Perubahan Suhu yang DrastisSuhu panas ke dingin secara ekstrem dan tiba-tiba bisa menyebabkan kaca mobil retak. Misalnya, jika mobil diparkir di bawah sinar matahari langsung selama waktu yang lama dan kemudian tiba-tiba dipindahkan ke area dengan suhu dingin. Jadi, sebisa mungkin menghindari memarkir mobil di bawah sinar matahari langsung dan coba untuk menjaga suhu di dalam mobil tetap stabil. 3. Panas Sinar Matahari  Paparan sinar matahari berlebih bisa membuat tepi luar kaca mengembang lebih cepat dibandingkan dengan bagian tengah kaca. Inilah yang bisa menyebabkan kaca mobil retak. Makanya, usahakan parkir mobil di tempat yang teduh atau di dalam gedung untuk menghindari paparan sinar matahari berlebih. 4. Kualitas Kaca Mobil Buruk Kualitas kaca mobil juga berperan dalam menentukan seberapa rentan kaca terhadap retakan. Kaca mobil yang memiliki kualitas rendah cenderung rentan mengalami kerusakan, bahkan ketika terkena satu pukulan saja. Jika meragukan kualitas kaca mobil yang sedang dimiliki, sebaiknya segera konsultasikan dengan profesional. 5. Kecelakaan Kecelakaan bisa menyebabkan kerusakan parah pada banyak bagian mobil, termasuk kaca mobil. Terlebih lagi, kecelakaan biasanya membuat bodi mobil terbentur sesuatu yang keras dengan cepat. Untuk menghindari hal ini, kamu perlu mengutamakan keselamatan saat berkendara dengan mematuhi peraturan lalu-lintas yang ada dan menerapkan teknik berkendara yang baik. Nah kira-kira nih kalau kaca mobil retak harus diapakan yah untuk penangan sementaranya?',
              });
            }}
          />
          <Card
            img={IBerita22}
            label="Profil Zlatan Ibrahimovic, Akhir Kisah si Penyihir"
            tgl="Monday, 9 April 2024"
            onPress={() => {
              navigation.navigate('Detail1', {
                image: IBerita22,
                titleDetail:
                  'Profil Zlatan Ibrahimovic, Akhir Kisah si Penyihir',
                textDetail1: 'Rio Eristiawan',
                textDetail2:
                  'MILAN - Penyerang AC Milan, Zlatan Ibrahimovic resmi mengumumkan pensiun sebagai pemain sepak bola profesional. Legenda asal Swedia itu memutuskan mengakhiri kisahnya pada usia 41 tahun. Baca Juga Pesan Perpisahan Zlatan Ibrahimovic saat Pensiun dari Sepak Bola Itu diumumkan Ibrahimovic saat AC Milan menang 3-1 atas Hellas Verona di partai terakhir Liga Italia 2022/2023. Itu berlangsung di Stadion San Siro, Senin (5/6/2023) dini hari. Ibrahimovic tak bermain bersama I Rossoneri pada laga kandang itu. tapai, dia menyampaikan pesan menyentuh usai memutuskan gantung sepatu. “Begitu banyak kenangan dan emosi di dalam stadion ini. Pertama kali saya tiba, Anda memberi saya kebahagiaan. Kedua kalinya, Anda memberi saya cinta,” katanya “Saya ingin berterima kasih kepada keluarga saya dan orang-orang terdekat saya atas kesabaran mereka. Saya ingin berterima kasih kepada keluarga kedua saya," ujarnya. Selama dua perioe bertugas di San Siro, Ibrahimovic-menyumbang tiga gelar, yakni dua trofi Liga Italia (2010/2011 dan 2021/2022). Lalu, Supercoppa Italiana (2011) Tapi, selama kariernya Ibracadabra-julukan Ibrahimovic-telah mengumpulkan lebih darai 30 gelar. Itu tidak termasuk dua Scudetto bersama Juventus yang dicopot karena Calciopoli. “Terakhir, dari hati saya, saya ingin berterima kasih kepada Anda, para penggemar," ungkap mantan penyeranhg Barcelona itu. "Anda menyambut saya dengan tangan terbuka dan saya akan menjadi seorang Milanista sepanjang hidup saya," tutupnya dilansir dari Football Italia. Profil Zlatan Ibrahimovic Ibrahimovic lahir di Kota Rosengard Malmo pada 3 Oktober 1981. Ayahnya berasal dari Bosnia dan ibunya keturunan Kroasia. Pria bertinggi 195 cm itu memiliki dua orang anak, yakni Maximilian dan Vincent dari Helena Seger. Kedua buah hatinya tinggal di Malmo. Itu sebabnya Ibrahimovic selalu pulang ke kampung halaman setiap libur akhir tahun untuk menemui anaknya. Secara pribadi Ibrahimovic enggan mengungkapkan secara spesifik mengenai agamanya. Namun banyak pihak menyebut dia beragama Islam karena sang ayah. Orang tua Ibrahimovic memiliki agama yang berbeda. Ayahnya seorang Muslim, sedangkan ibunya Katolik. Karir Zlatan Ibrahimovic Ibrahimovic sempat membela Malmo pada 1999-2001. Usai menunjukkan penampilan apik, dia bergabung dengan Ajax Amsterdam pada 2001-2004 dan memenangkan dua gelar Liga Belanda, Piala Liga Belanda serta Belanda Super Cup. Dia lalu bergabung dengan Juventus pada 2004-2006, tetapi tak memenangkan satu gelar. Dia memutuskan hijrah ke Inter Milan pada 2006-2009 dan meraih tiga gelar Liga Italia serta dua Italian Super Cup.Usai meraih kesuksesan bersama Inter Milan, Ibrahimovic pindah ke Barcelona pada 2009-2010 dan meraih Piala Dunia Antar Klub, Liga Spanyol, UEFA Super Cup dan dua Spanyol Super Cup. Kemudian Blaugraa meminjamkan Ibrahimovic ke Milan pada 2010-2011. Dia sukses mendapatkan gelar Liga Italia dan Italia Super Cup. Sempat dipermanenkan AC Milan, Ibrahimovic memutuskan hijrah ke Paris Saint-Germain (PSG) pada 2012-2016. Dia memenangkan empat Liga Prancis, dua Piala Liga Prancis dan tiga Prancis Super Cup serta tiga kali menjadi pemain terbaik Liga Prancis. Usai memenangkan banyak gelar domestik bersama PSG, Zlatan Ibrahimovic meninggalkan Parc des Princes untuk membela Manchester United pada 2016-2018. Bersama The Red Devils -julukan Manchester United- Dia meraih Liga Europa, Piala Liga Inggris dan Community Shield. Ibrahimovic lalu memutuskan meninggalkan Eropa dan tampil bersama LA Galaxy di Major League Soccer (MLS) pada 2018-2019. Hanya saja, dia gagal memenangkan gelar apapun. Pada Januari 2020, Ibrahimovic kembali berkarir bersama Milan hingga memutuskan pensiun pada Juli 2023. Ibrahimovic sempat membawa Milan menjadi juara Liga Italia. Namun, di musim terakhirnya, dia mengalami cedera dan hanya tampil sebanyak empat laga serta membuat satu gol. Sayangnya, hingga mengumumkan pensiun, Ibrahimovic belum pernah menjuarai Liga Champions. Namun, dia bisa meraih banyak penghargaan individu. ',
              });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  wrapper: {
    marginTop: 0.01 * windowHeight,
    marginBottom: windowWidth * -0.07, // 3% of the screen windowWidth
    paddingHorizontal: windowWidth * 0.05, // 5% of the screen windowWidth
  },
  sc: {
    paddingHorizontal: windowWidth * 0.05, // 5% of the screen windowWidth
  },
  text1: {
    fontFamily: fonts.primary.semibold,
    fontSize: windowWidth * 0.07, // 8% of the screen windowWidth
    color: '#333647',
    top: 0.03 * windowHeight,
  },
  text2: {
    fontFamily: fonts.primary.regular,
    fontSize: windowWidth * 0.045, // 4% of the screen windowWidth
    color: '#7C82A1',
    top: 0.03 * windowHeight,
  },
  news: {
    marginTop: windowWidth * 0.25, // 20% of the screen windowWidth
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  catte: {
    width: 0.23 * windowWidth,
    height: 0.1 * windowWidth,
    borderRadius: 0.2 * windowWidth,
    marginRight: 0.03 * windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcate: {
    fontSize: windowWidth * 0.035,
    fontFamily: fonts.primary.semibold,
  },
  list: {
    top: 0.21 * windowWidth,
    marginBottom: 0.027 * windowWidth,
    marginTop: 0.027 * windowWidth,
  },
});

export default HomePage;
