import LazyLoad from "react-lazy-load";
import SectionHeader from "../../../components/sectionHeader";
import Container from "../../../components/Container";

const OurCampus = () => {
    return (
        <section className="pb-20">
            <SectionHeader name={'Our Campus'}></SectionHeader>
            <Container>
                <div className="grid grid-cols-3 mt-5">
                    <div className={`lg:w-96 w-9/12 mx-auto mb-4 glass`}>
                        <figure><LazyLoad className="w-full"><img className="h-[300px] w-full rounded" src='https://images.unsplash.com/photo-1618073193718-23a66109f4e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt='https://images.unsplash.com/photo-1618073193718-23a66109f4e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' /></LazyLoad></figure>
                    </div>
                    <div className={`lg:w-96 w-9/12 mx-auto mb-4 glass`}>
                        <figure><LazyLoad className="w-full"><img className="h-[300px] w-full rounded" src='https://images.unsplash.com/photo-1593766729975-b40ae45191ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='https://images.unsplash.com/photo-1593766729975-b40ae45191ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' /></LazyLoad></figure>
                    </div>
                    <div className={`lg:w-96 w-9/12 mx-auto mb-4 glass`}>
                        <figure><LazyLoad className="w-full"><img className="h-[300px] w-full rounded" src='https://images.unsplash.com/photo-1662065931019-20fc202bfd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' alt='https://images.unsplash.com/photo-1662065931019-20fc202bfd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' /></LazyLoad></figure>
                    </div>
                    <div className={`lg:w-96 w-9/12 mx-auto mb-4 glass`}>
                        <figure><LazyLoad className="w-full"><img className="h-[300px] w-full rounded" src='https://images.unsplash.com/photo-1568720157167-5ac11010c680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' alt='https://images.unsplash.com/photo-1568720157167-5ac11010c680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' /></LazyLoad></figure>
                    </div>
                    <div className={`lg:w-96 w-9/12 mx-auto mb-4 glass`}>
                        <figure><LazyLoad className="w-full"><img className="h-[300px] w-full rounded" src='https://images.unsplash.com/photo-1586348274214-06dfb3c8bbb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80' alt='https://images.unsplash.com/photo-1586348274214-06dfb3c8bbb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80' /></LazyLoad></figure>
                    </div>
                    <div className={`lg:w-96 w-9/12 mx-auto mb-4 glass`}>
                        <figure><LazyLoad className="w-full"><img className="h-[300px] w-full rounded" src='https://images.unsplash.com/photo-1618073193718-23a66109f4e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt='https://images.unsplash.com/photo-1618073193718-23a66109f4e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' /></LazyLoad></figure>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OurCampus;