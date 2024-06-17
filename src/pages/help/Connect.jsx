const Connect = () => {
    return (
        <div>
            <h2>Connect With Us</h2>
            <div className="cotainer mt-4">
                <form action="/PHP/index.php" method="post">
                    <h3 class="mb-4">Kama una dukuduku Fikisha hapa</h3>
                    <div class="mb-3">
                        <label for="name" class="form-label">
                            Username:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            placeholder="Njox"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">
                            E-Mail:
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="form-control"
                            placeholder="example@gmail.com"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="complaint" class="form-label">
                            Complaint:
                        </label>
                        <textarea
                            name="complaint"
                            id="complaint"
                            class="form-control"
                            rows="10"
                            required
                        ></textarea>
                    </div>
                    <input type="submit" value="Submit" class="btn btn-primary" />
                </form>

                <address>
                    <strong>Job Routes</strong>
                    123 Main Street
                    <br />
                    Njombe, CA 12345
                    <br />
                    (+255) 623-216-785
                    <br />
                    <a href="mailto:njox317@gmail.com" class="text-decoration-none">
                        njox317@gmail.com
                    </a>
                </address>
            </div>
        </div>
    );
};

export default Connect;
