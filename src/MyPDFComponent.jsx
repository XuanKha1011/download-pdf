import html2pdf from "html2pdf.js"

const MyPDFComponent = () => {
  const generatePDF = () => {
    const element = document.getElementById("pdfContent") // Replace 'pdfContent' with the ID of the HTML element containing the data to be converted

    html2pdf()
      .set({
        filename: "myPDF.pdf",
        pagebreak: { mode: "avoid-all", before: "#page2el" },
      })
      .from(element)
      .save()
  }

  return (
    <div className="bg-pink-500">
      <button onClick={generatePDF}>Download PDF</button>
      <div id="pdfContent" style={{ margin: "50px" }}>
        {/* Render your page content here */}
        <p
          className="bg-slate-400 text-red-700"
          style={{ backgroundColor: "red", padding: "50px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          saepe, corrupti autem, ut assumenda qui architecto voluptatum
          exercitationem in reiciendis, officiis eum repudiandae nemo deserunt?
          Adipisci dolores saepe nisi.
        </p>
      </div>
    </div>
  )
}

export default MyPDFComponent
