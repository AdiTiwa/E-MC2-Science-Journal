import ArticleDisplay from '../components/ArticleDisplay';
import NavBar from '../components/NavBar';

function Gallery() {
    return (
        <div>
            <div className="col-span-3 content-around">
                <NavBar active="gallery" />
                <div class="bg-maroon-200 py-10">
                    <h1 class="text-5xl font-serif text-white text-center">Gallery</h1>            
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-20'>
                    <ArticleDisplay title="Automated Dental Cavity Detection System Using Artificial Intelligence" author="Niharika Bhattacharjee" tag="Medicine" image="../logo512.png" year="2021" id="niharika_bhattacharjee">
                        It all started when I thought I had gingivitis. I came to this conclusion after consulting the most reputable source I knew, webmd.com of course. Sitting at the doctor's office, I anxiously waited for the confirmation. Were my suspicions correct? Nope! As my doctor explained my negative result, guilt slowly overcame me. I had just wasted three hours of my dad's time. Driving home, I was determined to find meaning in this seemingly unfulfilling trip, and indeed I did. The visit highlighted my privilege, which ignited my "eureka" moment. A dental diagnosis requires time, a medical professional, and money. Three things millions of people globally don't have; a problem I sought to address. With the aim of increasing dental care worldwide, I invested the following two years in creating an automated dental cavity detection system using Artificial Intelligence (AI). With a single dental photographic color image, my system can provide a cavity diagnosis and explain the diagnosis to the end-user in an understandable manner. By automating detection and explainability, which are skills dentists typically employ, I hope to assist those who can't visit the dentist due to lack of dental insurance, dentophobia, or limited dentist availability. Through this research, I had the opportunity to work with an IBM researcher and experiment with different deep learning architectures, explainable AI algorithms, and training techniques such as curriculum learning and transfer learning. By incorporating deep learning into my project, I gained experience in an interdisciplinary field powered by linear algebra, calculus, statistics, and biology. Above all, conducting such research has motivated me to pursue a career in computational health.
                    </ArticleDisplay>
                    <ArticleDisplay title="A Portable Machine-Learning Based Detection System of Prevalent Chronic Respiratory Illnesses and Lung Cancer" author="Sathvik Nallamalli" tag="Medicine" image="../logo512.png" year="2021" >
                        Lung cancer is the leading cause of cancer-related deaths in the world and succeeding melanoma skin cancer, it is the second leading cancer in men and women. Accessibility to the expensive imaging technology and accurate diagnostic tools for this disease is limited and therefore leads to death at an early stage. The need exists to develop an innovative diagnostic and detection measure to promptly detect the presence and type of cancer. This sparked the interest to develop an innovative lung cancer detection algorithm, LCDetect. It uses Python scripts, machine learning models, segmentation algorithms, and localization of solitary pulmonary nodules (SPN's), tumors, and lesions to detect the presence of cancer, malignity, type and stage. It uses the lung CT scan to provide a thorough diagnosis and reduce the need for PET and biopsy to prevent late detection. The algorithm works in three modules; image preprocessing, image detection, and a convolutional neural network model (CNN). Preprocessing includes noise removal, normalization, image filters, segmentation and augmentation. Extracted regions of interest, that are based on the location of nodules, are passed to image detection for feature extraction through segmentation and pixel calculations. Based on the extracted features, the layers of the CNN categorize the lung cancer using location-based analysis. Through the complex image detection and preprocessing techniques that feed through the layers of CNN model, the generated feature maps perform this classification. After several optimization techniques such as backpropagation and regression, a thorough statistical analysis was performed. Then, the algorithm was deployed on Azure Web Services. The system was trained and tested across 50,000 datasets and patient CT scans from local radiologists. The final algorithm passed with an accuracy of 98%. LCDetect is an innovative and fully functional solution to accurately detect for adenocarcinoma, squamous cell, non-small cell, and small cell lung cancer and predict the stage.
                    </ArticleDisplay>
                    <ArticleDisplay title="hi" tag="Testing" image="logo512.png" year="2021" id="testing">Hi</ArticleDisplay>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
