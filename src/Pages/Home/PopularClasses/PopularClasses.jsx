import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard";
import Container from "../../../components/Container";
import SectionHeader from "../../../components/sectionHeader";
import useAxios from "../../../Hooks/useAxios";

const PopularClasses = () => {
    const [baseUrl] = useAxios();
    const [classes,setClasses] = useState([]);
    useEffect(()=>{
        baseUrl.get('/classes')
        .then(res=> setClasses(res.data))
    },[])
    const popular = classes.filter(cd => cd.availableSeats <= 3);
    return (
        <section className="py-20">
            <Container>
                <SectionHeader name={'Popular classes'}></SectionHeader>
                <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 pt-6">
                    {popular?.map(pd => <ClassCard key={pd._id} data={pd}></ClassCard>)}
                </div>
            </Container>
        </section>
    );
};

export default PopularClasses;