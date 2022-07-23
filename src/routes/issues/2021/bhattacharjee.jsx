import ImageModal from "../../../components/ImageModal"
import Article, { Heading,
    SubHeading,
    Paragraph,
    SubSubheading,
} from "../../../components/util/ArticleUtils"

export default function NiharikaBhattacharjee2021() {
    return (
        <Article>
            <div className="pb-5">
                <div className="bg-white hover:bg-gray-50">
                    <p className="text-4xl font-serif">Automated Dental Cavity Detection System Using Artificial Intelligence</p>
                    <p className="text-lg font-serif">by Niharika Bhattacharjee</p>
                </div>
            </div>
            <hr className="animate-pulse"></hr>
            <Heading>Abstract</Heading>
            <Paragraph>
                Dental cavities impact over 3.9 billion people worldwide. Typically, cavity detection requires a
                trained dentist. However, barriers such as dentophobia, limited dentist availability, and lack of
                dental insurance prevent millions from receiving dental care. To address this, the student
                researcher created an Artificial Intelligence (AI) diagnostic system. The system uses an artificial
                neural network (ANN) to detect cavity presence on photographic color images and visually
                explains the rationale behind each diagnosis. Previous studies have only focused on cavity
                detection on extracted teeth showing the occlusal tooth surface. In contrast, this study’s system
                detects cavities on images showing multiple teeth and three additional tooth surfaces (occlusal,
                lingual, buccal, labial). To train the system, 314 de-identified images from online sources were
                collected. Using transfer learning from an ImageNet1k dataset, the ResNet-27 architecture proved
                to be most optimal in cavity detection after earning 77.8% accuracy. Visual explanations for the
                system’s cavity diagnoses were also generated using an algorithm called Local Interpretable Model
                Agnostic Explanations (LIME). After applying LIME, the system now has the ability to explain
                its diagnosis to an end-user in an understandable manner, which is a crucial skill employed by
                dentists. In the future, the student researcher aims to enhance the system’s performance using semisupervised learning techniques and additional data.
            </Paragraph>
            <Heading>Introduction</Heading>
            <SubHeading>Statement of Purpose</SubHeading>
            <Paragraph>
                Dental cavities, one of the most prevalent chronic diseases in the world, impacts over 3.9
                billion people worldwide (NIH, 2018). Of which 2.4 billion people suffer from untreated tooth
                decay, which can lead to toothaches and periapical abscesses (TIME, 2015). Typically, cavity
                detection requires the services of a trained dentist; however, 1 in 3 Americans don’t visit a
                dentist on an annual basis due to cost or dentophobia (Vox, 2014). Furthermore, chances of
                proper cavity diagnoses are lowered in developing nations, as the dentist to patient ratio can be
                disproportionate (i.e., 1: 1,250,000 in Ethiopia (WHO, 2017)). Factors such as cost and limited
                availability of dentists often prevent people from receiving proper cavity diagnoses. To address
                these issues, a cavity diagnosing system using an artificial intelligence (AI) approach would be
                advantageous to increase access to dental care at lower costs.
            </Paragraph>
            <Heading>Review of Literature</Heading>
            <SubHeading>Limitations of Current Diagnostic Methods due to Technology and Cost</SubHeading>
            <Paragraph>
                To diagnose a cavity, a dentist is often aided by x-rays or optical diagnostic devices such
                as the DIAGNodent™, DEXIS CariVu™, and the Canary System™. There are many limitations
                associated with the optical diagnostic devices mentioned above (Silvertown et al., 2017). Instead
                of detecting Streptococcus mutans (the cavity-causing bacteria which resides at the cavity), the
                DIAGNodent only detects fluorescence emitted by bacterial porphyrins, a common bacterium
                found everywhere in the mouth. The use of trans-illumination prevents the CariVu from
                detecting cavities on smooth surfaces and at around filling, while the Canary System’s limiting
                factor is cost. At $16,000, the Canary System costs three times more than the CariVu at $5,295
                (Chicago Tribune, 2019). Above all, these systems’ outputs require a trained dentist to interpret.
            </Paragraph>
            <SubHeading>Visual Examination</SubHeading>
            <Paragraph>
                Visual examination is also commonly used for cavity diagnosis. It provides a natural way
                for dentists to convey their diagnosis to their patients. During the exam, a dentist can identify a
                patient’s cavity, inform the patient about the cavity’s location and development, and suggest
                changes to the patient’s oral routine. Since the method doesn’t require any equipment, it’s also
                the most cost-efficient from an equipment perspective. However, visual examination still has one
                requirement that prevents millions of people from receiving a proper cavity diagnosis; the method requires a dentist. Access to dental care, in general, is difficult for many as cost, fear of
                pain, and lack of dental insurance pose as barriers (Gupta & Vujicic, 2019). Some of these
                barriers could be addressed with an AI diagnostic system that detects cavity presence and
                provides a diagnostic explanation at lower cost and without an initial dental visit.
            </Paragraph>
            <SubHeading>Artificial Intelligence (AI)</SubHeading>
            <Paragraph>
                The field of AI is developing technologies that enable machines to mimic human
                behavior. It has been applied to several problems in medical imaging (i.e. Codella et al. (2019)
                for Melanoma detection, Akselrod-Ballin et al. (2019) for breast cancer prediction, Gulshan et al.
                (2016) for diabetic retinopathy diagnosis from fundus imaging). Machine learning (ML), a subset
                of AI, consists of algorithms used by machines to perform a specific task after undergoing a
                learning period. While classical ML algorithms rely on subject matter experts to hand craft
                features to extract from raw data prior to learning, deep learning (DL) consists of novel
                techniques that can bypass this step (Grossfeld, 2020). In imaging, DL typically uses image
                training/testing datasets and a multi-layer artificial neural network (ANN) architecture to learn
                how to complete tasks that normally require human intelligence (ex. diagnosing a cavity).
            </Paragraph>
            <SubHeading>Previous Research in Use in Cavity Detection</SubHeading>
            <div>
                <ImageModal src="../../img/2021/bhattacharjee/figure1.png" float="right">Figure 1</ImageModal>
                <Paragraph>
                    The field of AI is developing technologies that enable machines to mimic human
                    behavior. It has been applied to several problems in medical imaging (i.e. Codella et al. (2019)
                    for Melanoma detection, Akselrod-Ballin et al. (2019) for breast cancer prediction, Gulshan et al.
                    (2016) for diabetic retinopathy diagnosis from fundus imaging). Machine learning (ML), a subset
                    of AI, consists of algorithms used by machines to perform a specific task after undergoing a
                    learning period. While classical ML algorithms rely on subject matter experts to hand craft
                    features to extract from raw data prior to learning, deep learning (DL) consists of novel
                    techniques that can bypass this step (Grossfeld, 2020). In imaging, DL typically uses image
                    training/testing datasets and a multi-layer artificial neural network (ANN) architecture to learn
                    how to complete tasks that normally require human intelligence (ex. diagnosing a cavity).
                </Paragraph>
            </div>
            <SubHeading>Limitations of Previous Research</SubHeading>
            <Paragraph>
                The images and algorithms used in the study by Berdouses et al. (2015) did not reflect
                field conditions. The study’s images were not reflective of what an operator of a cavity classifier
                would receive from future users. Each of their training images contained a single tooth, an assumption that is not realistic in practice as patients’ images would consist of a mouthful of
                teeth. Additionally, their RF algorithm was only trained with images showing the occlusal tooth
                surface, and the algorithm was untrained in detecting cavities on labial, buccal, and lingual tooth
                surfaces. The study’s ML classifier also required a data scientist to physically extract each image
                feature needed to make a diagnosis. The student researcher’s study aims to address the
                limitations present in Berdouses et al.’s study
            </Paragraph>
            <SubHeading>Benefits of Using Photographic Color Images over X-Rays</SubHeading>
            <Paragraph>
                While there are limited studies that have trained DL classifiers for cavity detection on
                photographic color images, there are many studies that have trained DL classifiers to detect
                cavities on X-ray images (Lee et al., 2018; Ali et al., 2016). However, since X-ray machines
                aren’t portable, it would still require a costly visit to the dentist. A complete series of
                radiographic images costs $189 (How Much Do Dental X-Rays Cost Without Insurance, n.d.).
                For the millions of people who can’t afford a dental visit, any classifier requiring X-rays is
                difficult to access. On the other hand, photographic images of teeth are easier to obtain by people
                in general and certainly in developing countries. In fact, over 3 billion people worldwide have
                built-in cameras in their smartphones of which 45% of the smartphone users are from emerging
                economies (Silver, 2019). Cheaper options are available as well, such as intraoral cameras for
                under $30.00. Not everyone is familiar with what their teeth look like in an X-ray image, but
                everyone is familiar with what their teeth look like in a photo. Thus, users can easily interpret
                and trust a classifier’s diagnosis on photographic images, with the help of explainable AI
                techniques such as Local Interpretable Model-Agnostic Explanation (LIME).
            </Paragraph>
            <SubHeading>Explainable AI</SubHeading>
            <SubSubheading>Local Interpretable Model-Agnostic Explaination (LIME)</SubSubheading>
            <div>
                <ImageModal src="../../img/2021/bhattacharjee/figure2.png" float="right">Figure 2</ImageModal>
                <Paragraph>
                    To develop end user trust,
                    it’s extremely important that a classifier trained to detect cavities on photographic color images
                    can produce accurate and interpretable results. From an accuracy perspective, a false-positive
                    diagnosis may be harmful to a patient’s mental health and finances while a false negative can
                    have significant implications on the patient’s general health. Trust in AI is an emerging field. A
                    popular explainer algorithm applied on image classifiers to develop trust is called LIME (Ribeiro
                    et al., 2016). For a given medical image, LIME can overlay a visual explanation on top of the
                    image, highlighting the important regions of the image that influenced the classification result
                    (Ribeiro et al., 2016). Such explanations help the end user understand the rationale behind the
                    model’s diagnosis (Figure 2). If LIME were implemented
                    on an accurate DL cavity detection classifier, the visual
                    explanation would highlight which tooth surfaces heavily
                    influenced the classifier’s diagnosis. These explanations
                    would also inform patients about the specific tooth surfaces
                    that need more brushing. While LIME would be extremely
                    effective, there are no trained DL classifiers publicly
                    available that detect cavity presence on photographic
                    images, while providing an explanation for the diagnosis using an explainable AI technique.
                </Paragraph>
            </div>
        </Article>
    )
}