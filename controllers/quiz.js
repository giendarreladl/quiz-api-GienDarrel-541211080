const db = require("../models");
const Quiz = db.quizzes;


//CREATE
exports.create = async (req,res) => {
     
    try{
        const data = await Quiz.create(req.body);
        res.json({
            message: "quiz created successfully",
            data : data,
        })
    }
    catch (eror) {
        res.status(500).json({
            message: eror.message,
            data: null,
        });
    }
};

//READALL (GETALL)
exports.getAll = async (req,res) => {
     
    try{
        const quizzes = await Quiz.findAll()
        res.json({
            message: "quiz retrieved (get) successfully",
            data : quizzes,
        });
    }
    catch (eror) {
        res.status(500).json({
            message: eror.message,
            data: null,
        });
    }
};

//READ ID(GET ID)
exports.findOne = async (req,res) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id,{rejectOnEmpty: true})
        res.json({
            message: `quiz retrieved successfully with id=${id}.`,
            data : quiz,
        });
    }
    catch (eror) {
        res.status(500).json({
            message: eror.message || "Some eror occurred while retrieving quiz",
            data: null,
        });
    }
};

//UPDATE
exports.update = async (req,res) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id,{ rejectOnEmpty: true })
        quiz.update(req.body,{
            where: {id}
        })
        res.json({
            message: "quiz update successfully",
            data : quiz,
        });
    }
    catch (eror) {
        res.status(500).json({
            message: eror.message || "Some eror occurred while retrieving quiz",
            data: null,
        });
    }
};

//DELETE
exports.delete = async (req,res) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id,{rejectOnEmpty: true})
        quiz.destroy()
        res.json({
            message: "quiz delete successfully",
            data : quiz,
        });
    }
    catch (eror) {
        res.status(500).json({
            message: eror.message || "Some eror occurred while retrieving quiz",
            data: null,
        });
    }
};

///MENAMPILKAN ATAU MENGAMBIL DATA BERDASARKAN KATEGORI TERTENTU
exports.GetByCategoyId = async (req,res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            CategoryId: id
        }
    })
        res.json({
            message: `quiz retrieved successfully with categoryId=${id}.`,
            data : quizzes,
        });
};

///MENAMPILKAN ATAU MENGAMBIL DATA BERDASARKAN LEVEL TERTENTU
exports.GetByLevelId = async (req,res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            levelId: id
        }
    })
        res.json({
            message: `quiz retrieved successfully with levelId=${id}.`,
            data : quizzes,
        });
};

