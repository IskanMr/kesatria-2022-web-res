import { 
    BrowserRouter as Router,
    Switch, 
    Route, 
    useLocation, 
    useRouteMatch,
    NavLink,
    Redirect
} from 'react-router-dom';
import React, {useState, useMemo} from 'react';

export function Material1() {


    return (
        <>
                    <div>
                        <h1 className='text-black text-4xl font-gill font-bold mb-3' >Personal Branding</h1>
                    </div>
                    <div className=''>
                        <p>Personal Branding adalah suatu proses pembentukan persepsi masyarakat terhadap aspek yang dimiliki individu. Dalam materi Personal Branding ini, Kesatria Muda akan mempelajari tentang bagaimana cara melakukan Personal Branding yang baik, seperti membuat CV dan resume yang benar. Selain itu, Kesatria juga akan dikenalkan dengan Applicant Tracking System (ATS) dan aplikasi LinkedIn.</p>
                    </div>
                    <div className='xl:h-xl lg:h-xl md:h-xl sm:h-lg 320px:h-md'>
                        <iframe
                            src='https://drive.google.com/file/d/135-dprmEwy54rrKXKa8qe8qFp6atM9Lr/preview'
                            className='w-full overflow-hidden h-full'
                            allow='autoplay'
                            title='Personal Branding' 
                            height="100%" width="100%"
                        />

                    </div>
                    <br/>

        </>
    );
}



export function Material2() {
    return (
        <>
                    <div>
                        <h1 className='text-black text-4xl font-gill font-bold mb-3'>Fasilitas Fakultas Teknik</h1>
                    </div>
                    <div className=''>
                        <p>Melalui materi Fasilitas Fakultas Teknik, Kesatria Muda akan dikenalkan dengan berbagai fasilitas di Fakultas Teknik yang menunjang kegiatan akademik maupun non-akademik. Fasilitas-fasilitas tersebut terdiri dari fasilitas fisik dan fasilitas non-fisik. Di akhir modul juga terdapat pedoman informasi dan tutorial penggunaan fasilitas yang terdapat di Fakultas Teknik yang terdapat pada Buku Pelayanan.
                    </p>
                    </div>
                    <div className='xl:h-xl lg:h-xl md:h-xl sm:h-lg 320px:h-md'>
                        <iframe
                            src='https://drive.google.com/file/d/18v_GflB0cwiWwrbunv1Uv77gavbsDq8D/preview'
                            className='w-full overflow-hidden h-full'
                            allow='autoplay'
                            title='Personal Branding' 
                            height="100%" width="100%"
                        />

                    </div>
        </>
    );
}



export function Material3() {
    const dropDownsStyle = "flex-row px-1 bg-white text-oranges-default cursor-pointer py-1 w-full hover:bg-oranges-default hover:text-white justify-center place-content-center";
    const dropDownsActive = "flex-row bg-oranges-default px-1 text-white cursor-pointer py-1 w-full justify-center place-content-center";
    const jurusan = [
        {value:'Perencanaan Wilayah Kota', key:0},
        {value: 'Arsitektur', key:1},
        {value: 'Teknik Geodesi', key:2},
        {value: 'Teknik Sipil', key:3}, 
        {value: 'Infrastruktur Lingkungan', key:4},
        {value: 'Teknik Kimia', key:5},
        {value: 'Teknik Mesin', key:6},
        {value: 'Teknik Industri', key:7},
        {value: 'Teknik-Elektro', key:8},
        {value: 'Teknologi Informasi', key:9},
        {value: 'Teknik Biomedis', key:10},
        {value: 'Teknik Nuklir', key:11},
        {value: 'Teknik Fisika', key:12},
        {value: 'Teknik Geologi', key:13},];
    // const pathJurusan = ['Perencanaan-Wilayah-Kota', 'Arsitektur', 'Teknik-Geodesi', 
    //                 'Teknik-Sipil', 'Infrastruktur-Lingkungan', Teknik-Kimia,
    //                 'Teknik-Mesin', 'Teknik-Industri', 'Teknik-Elektro', 
    //                 'Teknologi-Informasi', 'Teknik-Biomedis', 'Teknik-Nuklir',
    //                 'Teknik-Fisika', 'Teknik-Geologi' ];
    const linkJurusan = [
                        'https://drive.google.com/file/d/15YdPwnPe2fttZCBSS7rVZ7S4oiEgbXb9/preview', 
                        'https://drive.google.com/file/d/1hS7ZAkaXAEJHVdAiKauSCblnAJKjD2er/preview',
                        'https://drive.google.com/file/d/15f3P3l6ADRpAIs5Fb3jmoMujz_lS49Oy/preview',
                        'https://drive.google.com/file/d/16K91zanAHasv98J1TDx4dEGwr03F_wnZ/preview',
                        'https://drive.google.com/file/d/1w7jyO1mtRs-AyvluPnfoWP1k2PAqzwvU/preview',
                        'https://drive.google.com/file/d/1FeLqm-6lUhsjyiyuRSoR2q6cDTg7r_MT/preview',
                        'https://drive.google.com/file/d/1nakdUZHLfeabESQCxnICkAA0EKaVHUd1/preview',
                        'https://drive.google.com/file/d/16OKwVTt90EFgbOn63lrKlJ1AlF21b9h4/preview',
                        'https://drive.google.com/file/d/1K3Rfp94dUvxw5xkFhwcVNtala9mOHvvQ/preview',
                        'https://drive.google.com/file/d/15_6BeKR5Qn6x0g0AQNn5ziXyTO9WYLUf/preview',
                        'https://drive.google.com/file/d/1rwlLOXqQSCcF7Dfwa6O-2TGKKo9yopyT/preview',
                        'https://drive.google.com/file/d/1ouWihJyUqRG0yYFq68sFNbUHWzJ6PTex/preview',
                        'https://drive.google.com/file/d/1j-jpvZ1_iarjxsqt3MBLZO8q1papHqRY/preview',
                        'https://drive.google.com/file/d/1VrD8qkekP84C0aIHzTh74AHBhEs1fI2x/preview',
                        ]
    let rightNow = "Teknologi Informasi";
    const dropDownsShow = "show bg-oranges-default w-full overflow-auto mx-auto z-10 absolute flex flex-col ";
    const dropDownsHidden = "hidden bg-oranges-default w-2/3 overflow-auto mx-auto z-10 absolute";
   
    const [tampilDropdowns, tampilkanDrop] = useState(dropDownsHidden);
    
    
    jurusan.forEach((item)=>{
        if(useLocation().pathname === `/materi/Pengetahuan-Program-Studi/${item.value}`){
            rightNow=item.value;
        }}
    )
    
    const [dropDownsValue, changeValue] = useState(rightNow);
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('#dropDownsID')) {
            tampilkanDrop(dropDownsHidden)
        }
      }
    const {path} = useRouteMatch();
    return (
        <>
                    
                    <div>
                        <h1 className='text-black text-4xl font-gill font-bold mb-3 '>Pengetahuan Program Studi</h1>
                    </div>
                    <div>
                        <p>Materi Pengetahuan Program Studi akan menjelaskan tentang hal-hal mengenai 14 program studi yang ada di Fakultas Teknik. Materi ini berisi penjelasan mengenai visi misi program studi, apa saja yang akan dipelajari pada program studi tersebut, berbagai fasilitas dan laboratorium, media sosial dan laman resmi program studi, hingga prospek kerja dari program studi terkait.
                    </p>
                    </div>
                    <Router>
                        <div className="w-full mx-auto">
                            <div className="w-full relative inline-block mx-auto">
                                <button id='dropDownsID' onClick={()=>{if(tampilDropdowns===dropDownsShow){tampilkanDrop(dropDownsHidden)}else{tampilkanDrop(dropDownsShow)}}} type='button' className='bg-oranges-default flex-row justify-between px-1 text-white cursor-pointer border-2 py-1 w-full rounded-md'>
                                    {dropDownsValue}
                                <svg className="h-5 w-5 inline-flex justify-items-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                </button>
                                
                                <div id="myDropdown" className={tampilDropdowns}>
                                    {jurusan.map((item)=>
                                        <NavLink to={`${path}/${item.value}`} className={isActive => isActive? dropDownsActive : dropDownsStyle} activeClassName={dropDownsActive} onClick={(()=>changeValue(item.value))}>
                                            {item.value}
                                        </NavLink>
                                    )}  
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <Switch>
                            <Route exact path={`${path}`}>
                                <Redirect to={`${path}/Teknologi Informasi`}/>
                            </Route>
                            {linkJurusan.map((item, index)=>
                                <Route path={`${path}/${jurusan[index].value}`}>
                                    <div className='xl:h-xl lg:h-xl md:h-xl sm:h-lg 320px:h-md'>
                                        <iframe
                                            src={item}
                                            className='w-full overflow-hidden h-full'
                                            allow='autoplay'
                                            title='Personal Branding' 
                                            height="100%" width="100%"
                                        />
                                    </div>
                                </Route>
                                )}  
                        </Switch>
                        
                    </Router>
        </>
    );
}


export function Material4() {
    return (
        <>
                    <div>
                        <h1 className='text-black text-4xl font-gill font-bold mb-3'>Karya Aplikatif</h1>
                    </div>
                    <div className=''>
                        <p>Dalam materi Karya Aplikatif ini, Kesatria Muda akan mempelajari tentang bagaimana cara membuat abstrak, poster, dan presentasi yang benar dalam menyampaikan ide karya yang dimiliki. Melalui modul ini, Kesatria Muda juga akan dikenalkan dengan kegiatan PKM-PIMNAS (Program Kreativitas Mahasiswa-Pekan Ilmiah Mahasiswa Nasional).
                    </p>
                    </div>
                    <div className='xl:h-xl lg:h-xl md:h-xl sm:h-lg 320px:h-md'>
                        <iframe
                            src='https://drive.google.com/file/d/1W8fv1y3p_Iq3ws96hFEwwwXSNqMBwYSc/preview'
                            className='w-full overflow-hidden h-full'
                            allow='autoplay'
                            title='Personal Branding' 
                            height="100%" width="100%"
                        />

                    </div>
        </>
    );
}


export function Material5() {
    return (
        <>
                    <div>
                        <h1 className='text-black text-4xl font-gill font-bold mb-3'>Jalan-Jalan Teknik</h1>
                    </div>
                    <div className=''>
                        <p>COMING SOON</p>
                    </div>
                  
                    {/* <div className=''>
                        <div className='xl:h-xl lg:h-xl md:h-xl sm:h-lg 320px:h-md'>
                            <iframe
                                src='https://drive.google.com/file/d/1W8fv1y3p_Iq3ws96hFEwwwXSNqMBwYSc/preview'
                                className='w-full overflow-hidden h-full'
                                allow='autoplay'
                                title='Personal Branding' 
                                height="100%" width="100%"
                            />

                        </div>
                    </div> */}
                    
        </>
    );
}


export function Material6() {
    return (
        <>
                    <div>
                        <h1 className='text-black text-4xl font-gill font-bold mb-3'>Sejarah Teknik</h1>
                    </div>
                    <div className=''>
                        <p>Fakultas Teknik memiliki sejarah yang sangat panjang. Melalui materi Sejarah Teknik, Kesatria Muda akan diajak untuk menonton video animasi yang akan memaparkan tentang perjalanan sejarah Fakultas Teknik dari awal dibentuk hingga menjadi fakultas terbesar di Universitas Gadjah Mada seperti saat ini.</p>
                    </div>
                    {/* VIDEO PLAYER */}
          
                        <div className='h-md 360px:h-sm'>
                            <iframe
                                src='https://www.youtube.com/embed/oZoNAmPZx1I'
                                className='w-full overflow-hidden h-full'
                                allow='autoplay'
                                title='Personal Branding' 
                                height="100%" width="100%"
                            />

                        </div>
        </>
    );
}

export function Material7() {
    return (
        <>
                    <div>
                        <h1 className='text-black text-4xl font-gill font-bold mb-3'>Swakarya Kampus</h1>
                    </div>
                    <div className=''>
                        <p>Materi Swakarya Kampus akan digunakan sebagai bahan bacaan sebelum melakukan kegiatan Swakarya Kampus pada hari ke-2 PPSMB Kesatria. Materi ini berisi referensi dan penjelasan tentang teknologi, barang, hingga desain perancangan tempat yang modern dan memiliki banyak manfaat. Referensi tersebut dibagi menjadi 3 klaster, yaitu klaster manufaktur, infrastruktur, dan energi.</p>
                    </div>
                    <div className='xl:h-xl lg:h-xl md:h-xl sm:h-lg 320px:h-md'>
                        <iframe
                            src='https://drive.google.com/file/d/1QJjy-zJiDy7LtTFO6IPO2ZxqBV7JFkYa/preview'
                            className='w-full overflow-hidden h-full'
                            allow='autoplay'
                            title='Personal Branding' 
                            height="100%" width="100%"
                        />

                    </div>
        </>
    );
}
