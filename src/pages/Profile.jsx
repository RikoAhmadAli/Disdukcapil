import { useState } from 'react';
import heroImage from '../assets/images/masjid.jpg'; 

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabContents = {
    about: (
      <div className="space-y-6">
        <h5 className="text-xl font-bold text-center mb-6">VISI dan MISI GUBERNUR SUMATERA BARAT</h5>
        
        <div>
          <p className="font-bold italic">VISI</p>
          <blockquote className="border-l-4 border-cyan-300 pl-4 italic my-4">
            "Terwujudnya Sumatera Barat Madani yang Unggul dan Berkelanjutan"
          </blockquote>
        </div>

        <div>
          <p className="font-bold italic">MISI</p>
          <ol className="list-decimal list-inside space-y-3">
            {[
              "Meningkatkan kualitas sumber daya manusia yang berakhlak mulia, sehat, berpengetahuan, terampil dan berdaya saing.",
              "Meningkatkan tata kehidupan sosial kemasyarakatan berdasarkan filsafah adat basandi syarak, syarak basandi kitabullah.",
              "Meningkatkan nilai tambah dan produktifitas pertanian, perkebunan, peternakan dan perikanan.",
              "Meningkatkan usaha perdagangan dan industri kecil/menengah serta ekonomi berbasis digital.",
              "Meningkatkan ekonomi kreatif dan daya saing kepariwisataan.",
              "Meningkatkan pembangunan infrastruktur yang berkeadilan dan berkelanjutan.",
              "Mewujudkan tata kelola pemerintahan dan pelayanan publik yang bersih, akuntabel serta berkualitas."
            ].map((item, index) => (
              <li key={index} className="pl-2">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <p className="font-bold italic">Strategi yang akan dijalankan:</p>
          <ol className="list-decimal list-inside space-y-3">
            {[
              "Meningkatkan koordinasi antara Provinsi dengan Pusat dan Kabupaten/Kota.",
              "Meningkatkan Kapasitas SDM Aparatur.",
              "Meningkatkan sarana prasarana dan teknologi informasi.",
              "Melibatkan organisasi masyarakat/organisasi sosial/kelompok masyarakat.",
              "Meningkatkan pengetahuan masyarakat melalui sosialisasi/pelatihan/bimtek/KIE."
            ].map((item, index) => (
              <li key={index} className="pl-2">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <p className="font-bold italic">MOTTO</p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
            "Penduduk Terkendali, Sumbar Sejahtera"
          </blockquote>
        </div>

        <div>
          <p className="font-bold italic">Kebijakan yang dilakukan oleh Dinas Dukcapil:</p>
          <ol className="list-decimal list-inside space-y-3">
            {[
              "Perumusan dan penetapan kerangka kebijakan pelayanan admnistrasi kependudukan dan pencatatan sipil.",
              "Pelaksanaan pengembangan kapasitas SDM.",
              "Pelaksanaan pengembangan kapasitas sarana dan prasarana.",
              "Pelaksanaan pengembangan database administrasi kependudukan."
            ].map((item, index) => (
              <li key={index} className="pl-2">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <p className="font-bold italic">Tujuan Kebijakan oleh Dinas Dukcapil:</p>
          <ol className="list-decimal list-inside space-y-3">
            {[
              "Terwujudnya pelayanan administrasi kependudukan dan pencatatan sipil.",
              "Terwujudnya peningkatan kualitas penyajian dan pemanfaatan data kependudukan."
            ].map((item, index) => (
              <li key={index} className="pl-2">{item}</li>
            ))}
          </ol>
        </div>
      </div>
    ),
    service: (
      <div className="space-y-6">
        <h5 className="text-xl font-bold text-center mb-6">TUGAS POKOK DAN FUNGSI DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL PROVINSI SUMATERA BARAT</h5>
        
        <div>
          <p className="font-bold">Tugas Dinas Dukcapil</p>
          <p className="text-justify pl-4">
            Dinas Kependudukan dan Pencatatan Sipil mempunyai tugas membantu Gubernur melaksanakan urusan pemerintahan bidang Administrasi Kependudukam dan Pencatatan Sipil yang menjadi kewenangan Provinsi dan yang ditugaskan kepada Provinsi.
          </p>
        </div>

        <div>
          <p className="font-bold">Fungsi Dinas Dukcapil</p>
          <p className="text-justify pl-4 mb-4">
            Untuk menyelenggarakan tugas tersebut Dinas Kependudukan dan Pencatartan Sipil mempunyai fungsi adalah :
          </p>
          <ol className="list-decimal list-inside space-y-3 pl-4">
            {[
              "Penyelenggaran perumusan kebijakan teknis di bidang Administrasi Kependudukan dan Pencatatan Sipil.",
              "Penyelenggarakan pelaksanaan kebijakan teknis di bidang Administrasi Kependudukan dan Pencatatan Sipil.",
              "Penyelenggaraan administrasi Dinas Kependudukan dan Pencatatan Sipil.",
              "Penyelenggaraan Pemantauan, Evaluasi dan Pelaporan di bidang Administrasi Kependudukan dan Pencatatan Sipil.",
              "Penyelenggaraan fungsi lain yang diberikan oleh pimpinan terkait tugas dan fungsinya."
            ].map((item, index) => (
              <li key={index} className="pl-2">{item}</li>
            ))}
          </ol>
        </div>
      </div>
    ),
    pages: (
      <div className="space-y-6">
        <h5 className="text-xl font-bold text-center mb-6">Profil Kepala Dinas</h5>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="mx-auto">
            <img 
              src="https://disdukcapil.sumbarprov.go.id/images/2022/foto%20kadis%204.jpeg" 
              alt="Kepala Dinas" 
              className="w-48 h-72 object-cover rounded"
            />
          </div>
          
          <div className="flex-1">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  ["Nama", "Drs. Besri Rahmad, MM"],
                  ["NIP", "196660919 198602 1 006"],
                  ["Tempat Lahir", "PARIAMAN"],
                  ["Tanggal Lahir", "19 SEPTEMBER 1966"],
                  ["Agama", "ISLAM"],
                  ["Pangkat/Golongan", "PEMBINA UTAMA MUDA / (IV/c)"],
                  ["Alamat Email", ""],
                  ["Riwayat Pendidikan", "S2 Magister Manajemen STIE-KBP"],
                  ["Riwayat Jabatan", [
                    "Kabid Pembinaan Dinas Kearsipan dan Perpustakaan, 2017",
                    "Kabid Peningkatan Kompetensi Jabatan Fungsional BPSDM, 2018",
                    "Kepala Dinas Pemberdayaan Perempuan dan Perlindungan Anak, 2019",
                    "Kepala Dinas Kependudukan dan Pencatatan Sipil, 2021"
                  ]]
                ].map(([label, value], index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-2 font-bold w-1/3">{label}</td>
                    <td className="py-2">
                      {Array.isArray(value) ? (
                        <ul className="list-disc list-inside">
                          {value.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    aa: (
      <div className="space-y-6">
        <h5 className="text-xl font-bold text-center mb-6">STRUKTUR ORGANISASI DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL TAHUN 2022</h5>
        
        <div className="mb-8">
          <img 
            src="https://disdukcapil.sumbarprov.go.id/images/2022/foto%20pejabat/sotk.PNG" 
            alt="Struktur Organisasi" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        {[
          {
            img: "https://disdukcapil.sumbarprov.go.id/images/2022/foto%20pejabat/BESRI%20RAHMAD.jpg",
            name: "Drs. Besri Rahmad, MM",
            position: "KEPALA DINAS",
            nip: "19660919 198602 1 006"
          },
          {
            name: "Yulfina, SE.Ak,MM",
            position: "SEKRETARIS DINAS",
            nip: "19740327 199803 2 003"
          },
          {
            img: "https://disdukcapil.sumbarprov.go.id/images/2022/foto%20pejabat/ADEK%20PUTRA%20KABID%20DAFDUK%20(1).jpeg",
            name: "Adek Putra, SAP, M.Si",
            position: "Kabid FASILITASI PENDAFTARAN PENDUDUK",
            nip: "19790808 200003 1 001"
          },
          {
            img: "https://disdukcapil.sumbarprov.go.id/images/2022/foto%20pejabat/ISNANDAR%20KASI%20PIAK%20PD.jpeg",
            name: "Isnandar Putra, S.Pt",
            position: "Kabid PIAK dan Pemanfaatan Data",
            nip: "19760210 200901 1 003"
          },
          {
            name: "Syolvani, S. Kom, MT",
            position: "Kabid Fasilitasi Pencatatan Sipil",
            nip: "19690523 199703 1 002"
          },
          {
            img: "https://disdukcapil.sumbarprov.go.id/images/2022/foto%20pejabat/DARA%20AREND%20SUKMA%20KASUBAG%20UMUM.jpeg",
            name: "Dara Arend Sukma, S.STP",
            position: "Kasubag Umum dan Kepegawaian",
            nip: "19920922 201406 2 002"
          }
        ].map((person, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 items-center mb-8 p-4 bg-gray-50 rounded-lg">
            {person.img && (
              <img 
                src={person.img} 
                alt={person.name} 
                className="w-32 h-32 object-cover rounded-full"
              />
            )}
            <div className="flex-1">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="font-bold py-1 w-1/4">Nama</td>
                    <td className="py-1">: {person.name}</td>
                  </tr>
                  <tr>
                    <td className="font-bold py-1">Jabatan</td>
                    <td className="py-1">: {person.position}</td>
                  </tr>
                  <tr>
                    <td className="font-bold py-1">NIP</td>
                    <td className="py-1">: {person.nip}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    ),
    sop: (
      <div className="space-y-6">
        <h5 className="text-xl font-bold text-center mb-6">PROFIL DINAS DUKCAPIL PROVINSI SUMATERA BARAT</h5>
        
        <div>
          <p className="font-bold italic">"PROFIL DINAS DUKCAPIL"</p>
          <p className="text-justify">
            Dinas Dukcapil mempunyai tugas membantu Gubernur melaksanakan urusan pemerintahan bidang Kependudukan dan Pencatatan Sipil yang menjadi kewenangan Provinsi dan yang ditugaskan kepada Provinsi.
          </p>
        </div>

        <div>
          <p className="font-bold italic">Fungsi Dinas Dukcapil:</p>
          <ol className="list-decimal list-inside space-y-3">
            {[
              "Perumusan kebijakan teknis Kependudukan dan Pencatatan Sipil.",
              "Penyelenggaraan pelaksanaan kebijakan urusan pemerintahan dan pelayanan umum bidang Kependudukan dan Pencatatan Sipil.",
              "Pembinaan dan fasilitasi bidang Kependudukan dan Pencatatan Sipil lingkup Provinsi.",
              "Pelaksanaan kesekretariatan Dinas Kependudukan dan Pencatatan Sipil.",
              "Penyelenggaraan pemantauan, evaluasi dan pelaporan di bidang Kependudukan dan Pencatatan Sipil.",
              "Penyelenggaraan fungsi lain di Kependudukan dan Catatan Sipil yang diberikan oleh Gubernur terkait tugas dan fungsinya."
            ].map((item, index) => (
              <li key={index} className="pl-2">{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <p className="font-bold italic">Kewenangan Pemerintah Provinsi Bidang Administrasi Kependudukan:</p>
          <ol className="list-decimal list-inside space-y-3">
            {[
              "Koordinasi Penyelenggaraan Administrasi Kependudukan.",
              "Pemberian Bimbingan, Supervisi dan Konsultasi pelaksanaan pendaftaran penduduk dan pencatatan sipil.",
              "Pembinaan dan sosialisasi penyelenggaraan administrasi kependudukan.",
              "Penyajian data kependudukan berskala provinsi yang berasal dari data kependudukan yang telah dikonsolidasikan dan dibersihkan oleh Kementerian yang bertanggung jawab dalam urusan Pemerintahan Dalam Negeri.",
              "Koordinasi pengawasan atas penyelenggaraan administrasi kependudukan."
            ].map((item, index) => (
              <li key={index} className="pl-2">{item}</li>
            ))}
          </ol>
        </div>
      </div>
    )
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-blue-800 text-white py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})`, }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold uppercase mb-4">Profil DPPKBKPS</h1>
            <div className="flex justify-center items-center text-sm">
              <a href="/" className="flex items-center hover:text-blue-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Beranda
              </a>
              <span className="mx-2">/</span>
              <span>Profil DPPKBKPS</span>
            </div>
          </div>
        </div>
        <a href="#scrollTo" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* Main Content */}
      <section id="scrollTo" className="py-16">
        <div className="container mx-auto px-6">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'about', label: 'Visi dan Misi' },
              { id: 'service', label: 'Tugas dan Fungsi' },
              { id: 'pages', label: 'Profil Kepala Dinas' },
              { id: 'aa', label: 'Struktur Organisasi' },
              { id: 'sop', label: 'Profil' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <div className="bg-white rounded-lg shadow-md p-8">
            {tabContents[activeTab]}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;