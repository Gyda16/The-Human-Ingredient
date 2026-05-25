document.addEventListener("DOMContentLoaded", () => {
    const forumForm = document.getElementById("forum-form");
    const threadsContainer = document.getElementById("forum-threads-container");
    const clearForumBtn = document.getElementById("clear-forum-btn");

    const defaultPosts = [
        {
            title: "¡Ayuda! Un Demonio Mayor me pide carne humana premium y se me agota el tiempo",
            category: "Cocina",
            author: "Chef_Novato_666",
            content: "Estoy en el día 4 y la velocidad del matadero no da abasto. ¿Hay alguna mejora en la tienda de propinas que acelere el proceso sin perder valiosos segundos de limpieza?",
            date: "Hace 2 horas"
        },
        {
            title: "Consejo vital: Nunca ignores las manchas de sangre en el suelo",
            category: "Cordura",
            author: "Superviviente_Gourmet",
            content: "Si el moodlet de locura llega al máximo, el personaje empieza a fallar las comandas de cocina. Vale la pena perder 3 segundos limpiando con la mopa antes de abrir las puertas.",
            date: "Ayer"
        }
    ];

    function renderForum() {
        let posts = JSON.parse(localStorage.getItem("infernal_posts")) || defaultPosts;
        threadsContainer.innerHTML = "";

        posts.forEach(post => {
            const card = document.createElement("div");
            card.className = "forum-card post-card";
            card.innerHTML = `
                <div class="post-header">
                    <span class="post-category-tag tag-${post.category}">${post.category}</span>
                    <span class="post-meta">Por <strong>${post.author}</strong> • ${post.date}</span>
                </div>
                <h4>${post.title}</h4>
                <p>${post.content}</p>
            `;
            threadsContainer.appendChild(card);
        });
    }

    if (forumForm) {
        forumForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const newPost = {
                title: document.getElementById("post-title").value,
                category: document.getElementById("post-category").value,
                author: document.getElementById("post-author").value,
                content: document.getElementById("post-content").value,
                date: "Ahora mismo"
            };

            let posts = JSON.parse(localStorage.getItem("infernal_posts")) || defaultPosts;
            posts.unshift(newPost);
            localStorage.setItem("infernal_posts", JSON.stringify(posts));

            forumForm.reset();
            renderForum();
        });
    }

    if (clearForumBtn) {
        clearForumBtn.addEventListener("click", () => {
            if (confirm("¿Quieres purgar todos los hilos creados por usuarios?")) {
                localStorage.removeItem("infernal_posts");
                renderForum();
            }
        });
    }

    renderForum();
});