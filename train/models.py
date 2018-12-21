from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=100)
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)
    def __str__(self):
        return self.name


class Path1(models.Model):
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)

    def __str__(self):
        return str(self.id)


class Path2(models.Model):
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)

    def __str__(self):
        return str(self.id)

class Path4(models.Model):
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)

    def __str__(self):
        return str(self.id)

class Path3(models.Model):
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)

    def __str__(self):
        return str(self.id)

class Path5(models.Model):
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)

    def __str__(self):
        return str(self.id)


class Path6(models.Model):
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)

    def __str__(self):
        return str(self.id)


class Path7(models.Model):
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)

    def __str__(self):
        return str(self.id)

class Path8(models.Model):
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)

    def __str__(self):
        return str(self.id)


class Path9(models.Model):
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)

    def __str__(self):
        return str(self.id)


class Path10(models.Model):
    lat = models.DecimalField(max_digits=100, decimal_places=15)
    lng = models.DecimalField(max_digits=100, decimal_places=15)

    def __str__(self):
        return str(self.id)


class Train(models.Model):
    name = models.CharField(max_length=100)
    station = models.CharField(max_length=100)
    dep_hr = models.IntegerField()
    dep_min = models.IntegerField()
    arr_hr = models.IntegerField()
    arr_min = models.IntegerField()
    stoppage = models.IntegerField()

    def __str__(self):
        return self.name + "-" + self.station


class Info(models.Model):
    name = models.CharField(max_length=100)
    station = models.CharField(max_length=100)
    dep_hr = models.IntegerField()
    dep_min = models.IntegerField()
    arr_hr = models.IntegerField()
    arr_min = models.IntegerField()
    stoppage = models.IntegerField()

    def __str__(self):
        return self.name + "...................." + self.station
