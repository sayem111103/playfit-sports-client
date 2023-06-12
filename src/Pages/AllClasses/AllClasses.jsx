import Banner from "../../Shared/Banner/Banner";
import ClassCard from "../../components/ClassCard";
import Container from "../../components/Container";
import useApproveClass from "../../Hooks/useApproveClass";

const AllClasses = () => {
   const [classes] = useApproveClass()
    return (
        <>
        <Banner img={'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80'} mainName={'Home'} name={'Classes'}></Banner>           
            <section className="pb-20">
                <Container>
                    <div className="sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-6 pt-6">
                        {classes?.map(cd => <ClassCard key={cd._id} data={cd}></ClassCard>)}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default AllClasses;