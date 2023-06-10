import useInstructor from "../../Hooks/useInstructor";
import SectionHeader from "../../components/sectionHeader";
import InstructorCard from "../../components/InstructorCard";
import Container from "../../components/Container";
import Banner from "../../Shared/Banner/Banner";

const Allinstructors = () => {
    const [instructors, refetch] = useInstructor()
    return (
        <>
        <Banner img={'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80'} name={'Instructors'}></Banner>           
            <section className="pb-20">
                <Container >
                    <div className="grid grid-cols-3 gap-6 pt-6">
                        {instructors?.map(id => <InstructorCard key={id._id} data={id} allInstructor={true}></InstructorCard>)}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Allinstructors;